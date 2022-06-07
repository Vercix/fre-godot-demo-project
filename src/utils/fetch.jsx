export default function fetch({ host = 'jsonplaceholder.typicode.com', path = "/posts", port = 80 } = args) {
    return new Promise(async (res, rej) => {
       const http = new godot.HTTPClient()
       // This method works for both anyway
       let rb = new godot.PoolByteArray() // Array that will hold the data.
 
       async function checkConnection() {
 
          // console.log(godot.Engine.get_main_loop())
          // console.log(godot.SceneTree.idle_frame)
          // console.log(godot.SceneTreeTimer.timeout)
          // console.log(".....................")
          // console.log(godot.yield)
 
          return new Promise(async (res, rej) => {
             while (
                http.get_status() == godot.HTTPClient.STATUS_CONNECTING
                || http.get_status() == godot.HTTPClient.STATUS_RESOLVING
             ) {
                http.poll()
                console.log("Connecting...")
                await godot.yield(godot.Engine.get_main_loop(), godot.SceneTree.idle_frame);
             }
 
             console.log("<>Connected<>")
             res(0)
          })
       }
 
       async function doRequest() {
          return new Promise(async (res, rej) => {
             while (
                http.get_status() == godot.HTTPClient.STATUS_REQUESTING
             ) {
                http.poll()
                console.log("Requesting...")
                await godot.yield(godot.Engine.get_main_loop(), godot.SceneTree.idle_frame);
             }
             res(0)
          })
       }
 
       async function doGetChunck() {
          return new Promise(async (res, rej) => {
             while (
                http.get_status() == godot.HTTPClient.STATUS_BODY
             ) {
                // While there is body left to be read
                http.poll()
                // Get a chunk.
                await godot.yield(godot.Engine.get_main_loop(), godot.SceneTree.idle_frame);
                var chunk = http.read_response_body_chunk()
 
                if (chunk.size() == 0) {
 
                } else {
                   rb.append_array(chunk) // Append to read buffer.
                }
             }
             res(0)
          })
       }
 
       try {
          console.log('here')
 
          var err = http.connect_to_host(host, port)
          console.log(err)
 
          if (err) { throw new Error(err) }
          await checkConnection()
          console.log(http.get_status() == godot.HTTPClient.STATUS_CONNECTED)
 
          //Some headers
          var headers = [
             "User-Agent: Pirulo/1.0 (Godot-Fre)",
             "Accept: */*"
          ]
 
          err = http.request(godot.HTTPClient.METHOD_GET, path, headers) //Request a page from the site(this one was chunked..)
          if (err) { throw new Error(err) }
 
          await doRequest();
 
 
          console.log("response? ", http.has_response()) // Site might not have a response.
 
          if (http.has_response()) {
             //If there is a response...
             headers = http.get_response_headers_as_dictionary() // Get response headers.
             console.log("code: ", http.get_response_code()) // Show response code.
             //console.log("**headers:\\n", JSON.stringify(headers)) // Show headers.
 
             if (http.is_response_chunked()) {
                // Does it use chunks?
                console.log("Response is Chunked!")
             } else {
                // Or just plain Content-Length
                var bl = http.get_response_body_length()
                console.log("Response Length: ", bl)
             }
             await doGetChunck();
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