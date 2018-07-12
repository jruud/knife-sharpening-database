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
function getKnives() {
  return fetch('/api/file')
    .then(response => response.json())
    .then(knives => {
      console.log("Knives are looking sharp:", knives);
      return knives;
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
    </div>`);;

  return html;
}

/**
 * Fetch files from the API and render to the page
 */
function refreshFileList() {
  getKnives()
    .then(knives => {
      const html = renderFiles(knives);
      $('#file-list').html(html);
    });
}

/**
 * Submit the form to add a new knife to the Database
 */

function submitFileForm() {
  console.log("You clicked 'submit'. Congratulations.");

  const fileData = {
    brand: $('#knife-brand').val(),
    model: $('#knife-model').val(),
    _id: $('#file-id').val(),
  };

  let method, url;
  if (fileData._id) {
    method = 'PUT';
    url = '/api/file/' + fileData._id;
  } else {
    method = 'POST';
    url = '/api/file';
  }

  fetch(url, {
    method: method,
    body: JSON.stringify(fileData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(file => {
      console.log("we have updated the data", file);
      refreshFileList();
    })
    .catch(err => {
      console.error("A terrible thing has happened", err);
    })
}
