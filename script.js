document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    
    const output = document.getElementById('output');
    output.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                        <p><strong>Age:</strong> ${age}</p>
                        <p><strong>Department:</strong> ${department}</p>`;
    
    output.classList.add('show');
});