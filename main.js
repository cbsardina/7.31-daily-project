// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let fields = document.getElementById('fields');

// let input = document.createElement('input');
// fields.appendChild(input);
// input.classList.add("type", "label", "id", "icon", "options");
//


for (let i = 0; i < formData.length; i++) {

  let input = document.createElement('input');
  fields.appendChild(input);

  let first = formData[i];
  let second = formData[i];
  let third = formData[i];
  let fourth = formData[i];
  let fifth = formData[i];

  input.setAttribute("type", first.type);
  input.setAttribute("label", second.label);
  input.setAttribute("id", third.id);
  input.setAttribute("icon", fourth.icon);
  input.setAttribute("options", fifth.options);



  // input.classList.add("type");
  // input.classList.add("label");          DONT KNOW IF THIS IS NEEDED
  // input.classList.add("id");
  // input.classList.add("icon");
  // input.classList.add("options");


  console.log(input);
  // console.log(input.classList.contains("type"));
  // console.log(input.classList.contains("label"));    CECK FOR CLASS TYPE
  // console.log(input.classList.contains("id"));
  // console.log(input.classList.contains("icon"));
  // console.log(input.classList.contains("options"));

  // formInput.type = formData[i].type;
  // formInput.label = formData[i].label;
  // formInput.id = formData[i].id;
  // formInput.icon = formData[i].icon;
  // formInput.options = formData[i].options;

  // console.log(first.label);
  // console.log(second.label);
  // console.log(third.label);
  // console.log(fourth.label);
  // console.log(fifth.label);

  // input.classList.add("type");


    // console.log(formInput.classList.contains("type"));
    // console.log(formInput.classList.contains("label"));
    // console.log(formInput.classList.contains("id"));
    // console.log(formInput.classList.contains("icon"));
    // console.log(formInput.classList.contains("options"));
}
