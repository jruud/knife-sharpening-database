//Add placeholder list of knife entries

function getEntries () {
  const alphabet = ["a", "b", "c", "d"];

  alphabet.forEach( function(letter) {
      $('#knife-entries').append("<li>" + letter.toUpperCase() + "</li>");
  });
}

// /**
//  * Fetches data from the api
//  */
function getFiles() {
  return fetch('/api/file')
    .then(response => response.json())
    .then(files => {
      console.log("Knives are looking sharp:", files);
      return files;
    })
    .catch(error => console.error("GETFILES:", error));
}

// /**
//  * Render a list of files
//  */
function renderFiles(knives) {
  const html = knives.map(knife => `
    <div class="knife-look">
      <h3>${knife.brand} ${knife.model}</h3>
      <p>System Used: ${knife.system}</p>
      <p>Degrees Per Side: ${knife.angle}</p>
    </div>`);;

  return html;
}

/**
 * Fetch files from the API and render to the page
 */
function refreshFileList() {
  getFiles()
    .then(files => {
      const html = renderFiles(files);
      $('#file-list').html(html);
    });
}
