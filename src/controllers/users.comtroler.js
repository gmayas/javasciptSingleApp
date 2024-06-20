import usersView from '../views/users.html'

let storageToTable = () => {
  try {
    const dataUsers = JSON.parse(localStorage.getItem('users'));
    let tableHead = `<thead>
                       <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                       </tr>
                      </thead>`;
    let tableContent = "";
    dataUsers.map((value) => {
      tableContent += `<tr>   
                                <td>${value.id}</td>
                                <td>${value.name}</td>
                                <td>${value.username}</td>
                                <td>${value.email}</td>
                                <td>
                                   <div class="btn-group d-flex gap-2 mb-0">
                                     <a type="button" class="btn btn-primary" data-placement="top" title="Posts" 
                                        href="#/post/?id=${value.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-post" viewBox="0 0 16 16">
                                          <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                                        </svg></a>
                                    </div>		
                                </td>
                         </tr>`
    });
    return `${tableHead} <tbody> ${tableContent} </tbody>`;
  }
  catch (e) {
    console.log(e)
  }
};

export default async () => {
     const divElement = document.createElement('div');
     divElement.innerHTML = usersView;
     const userList = divElement.querySelector('#userList');
     userList.innerHTML = storageToTable();
     return divElement;
};

