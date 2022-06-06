
// @ts-nocheck
import { useState, useRef, useEffect } from "../fre-godot";

function Test({ on_load_posts }) {
   const [text, setText] = useState(1);


   function makeRequest() {
      return new Promise((res, rej) => {
         const http = new godot.HTTPClient()
         // This method works for both anyway
         let rb = new godot.PoolByteArray() // Array that will hold the data.

         function checkConnection() {
            while (
               http.get_status() == godot.HTTPClient.STATUS_CONNECTING
               || http.get_status() == godot.HTTPClient.STATUS_RESOLVING
            ) {
               http.poll()
               //console.log("Connecting...")
            }

         }

         function doRequest() {
            while (
               http.get_status() == godot.HTTPClient.STATUS_REQUESTING
            ) {
               http.poll()
               //console.log("Requesting...")
            }
         }

         function doGetChunck() {
            while (
               http.get_status() == godot.HTTPClient.STATUS_BODY
            ) {
               // While there is body left to be read
               http.poll()
               // Get a chunk.
               var chunk = http.read_response_body_chunk()

               if (chunk.size() == 0) {

               } else {
                  rb.append_array(chunk) // Append to read buffer.
               }
            }
         }

         try {
            var err = http.connect_to_host('jsonplaceholder.typicode.com', 80)
            if (err) { throw new Error(err) }
            checkConnection();
            console.log(http.get_status() == godot.HTTPClient.STATUS_CONNECTED)

            //Some headers
            var headers = [
               "User-Agent: Pirulo/1.0 (Godot-Fre)",
               "Accept: */*"
            ]

            err = http.request(godot.HTTPClient.METHOD_GET, "/posts", headers) //Request a page from the site(this one was chunked..)
            if (err) { throw new Error(err) }
            doRequest();


            console.log("response? ", http.has_response()) // Site might not have a response.

            if (http.has_response()) {
               //If there is a response...
               headers = http.get_response_headers_as_dictionary() // Get response headers.
               console.log("code: ", http.get_response_code()) // Show response code.
               console.log("**headers:\\n", JSON.stringify(headers)) // Show headers.

               if (http.is_response_chunked()) {
                  // Does it use chunks?
                  console.log("Response is Chunked!")
               } else {
                  // Or just plain Content-Length
                  var bl = http.get_response_body_length()
                  console.log("Response Length: ", bl)
               }
               doGetChunck();
               if (err) { throw new Error(err) }

               console.log("bytes got: ", rb.size())
               var t = rb.get_string_from_ascii()
               //setText(t)
               console.log("!!!!!")
               res(t)
               return;
            }

         } catch (e) {
            console.log(e)
            rej(e);
            return;
         }
      })
   }

   useEffect(() => {

      makeRequest()
         .then((res) => {
            setText(res)
            on_load_posts(JSON.parse(res))
         }).catch((err) => {
            console.log(err)
         })

   }
      , [])



   return (
      <label text={`${text}`} />
   )
}

export default function TestComp() {
   const rootRef = useRef(null)
   const [posts, setPosts] = useState([])
   const [hasReceivedPosts, setHasReceivedPosts] = useState(false)



   function receivedPosts(newPosts) {
      console.log('---- received posts----')
       console.log(newPosts.id)
       console.log([...posts, newPosts])
       console.log([...posts, newPosts])
       setPosts(newPosts)
       console.log(setHasReceivedPosts)
       setHasReceivedPosts(true)
   }

   useEffect(() => {
      console.log('posts')
      console.log(posts)
   },[posts])

   useEffect(() => {
      console.log('hasReceivedPosts')
      console.log(hasReceivedPosts)
   },[hasReceivedPosts])
   
   return (
      <panelcontainer anchor={15} rect_min_size={new godot.Vector2(200, 200)}>
         <panel anchor={15} >
               
            <vbox >

               
               {!hasReceivedPosts && 
               <Test on_load_posts={receivedPosts} />
               }
               {posts.map((post, i) => (
            
                  <label key={post.id} text={post.title} />
                  
               ))}

            </vbox>
         </panel>
      </panelcontainer>
   )
}

