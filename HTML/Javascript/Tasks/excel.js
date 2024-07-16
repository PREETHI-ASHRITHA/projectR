var students = [
    { 
        name: "Preethi",
        id : '22p31a4215',
        branch: 'AIML'
    },
    { 
        name: "Chahana",
        id : '22p31a0461',
        branch: 'ECE'
    },
    { 
      name: "Sandhya",
      id : '22p31a4223',
      branch: 'AIML'
    },
    { 
      name: "Sirisha",
      id : '22p31a0445',
      branch: 'ECE'
    },
  ];
  
  // Flag to track if table has been added initially
  var tableAdded = false;
  
  // Function to create and display the table
  function createTable() {
    // Get the table container
    var tableContainer = document.getElementById('tableContainer');
  
    // Create table element
    var table = document.createElement('table');
    table.classList.add('styled-table'); // Adding a class for styling (referenced in CSS)
  
    // Create table headers
    var headers = ['Name', 'RollNo', 'Branch', 'Action'];
    var headerRow = table.insertRow();
    headers.forEach(function(headerText) {
      var header = document.createElement('th');
      var textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
  
    // Populate data rows
    students.forEach(function(student, index) {
      var row = table.insertRow();
      var nameCell = row.insertCell();
      var idCell = row.insertCell();
      var branchCell = row.insertCell();
      var actionCell = row.insertCell();
      
      nameCell.textContent = student.name;
      idCell.textContent = student.id;
      branchCell.textContent = student.branch;
  
      // Create Edit button
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        editStudent(index); // Call editStudent function with the index of the row
      });
      actionCell.appendChild(editButton);
      // Create Delete button
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteStudent(index); // Call deleteStudent function with the index of the row
      });
      actionCell.appendChild(deleteButton);
    });
  
    // Append table to container
    tableContainer.innerHTML = ''; // Clear previous table
    tableContainer.appendChild(table);
    tableAdded = true; // Set flag to true after initial table creation
  }
  
  // Function to edit student data
  function editStudent(index) {
    var newName = prompt('Enter new name:');
    var newRollNo = prompt('Enter new ID:');
    var newBranch = prompt('Enter new branch:');
  
    if (newName && newRollNo && newBranch) {
      students[index].name = newName;
      students[index].RollNo = newId;
      students[index].branch = newBranch;
      createTable(); // Re-create table after editing
    }
  }
  
  // Function to delete student data
  function deleteStudent(index) {
    students.splice(index, 1);
    createTable(); // Re-create table after deleting
  }
  
  // Function to add a new student
  function addStudent() {
    var newName, newRollNo, newBranch;
  
    // Check if table has been added initially
    if (tableAdded) {
      newName = prompt('Enter name:');
      newRollNo = prompt('Enter ID:');
      newBranch = prompt('Enter branch:');
    } else {
      // Initial click, just create the table
      createTable();
      return;
    }
  
    if (newName && newRollNo && newBranch) {
      students.push({
        name: newName,
        id: newRollNo,
        branch: newBranch
      });
      createTable(); // Re-create table after adding new student
    }
  }
  
  // Event listener for button click to add new student
  document.getElementById('addButton').addEventListener('click', addStudent);