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
                                     <button type="button" class="btn btn-primary btn-more" data-bs-toggle="modal" data-placement="top" title="See more" data-bs-target="#modalSeeMore">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                                        </svg></button>
                                      <button type="button" class="btn btn-danger btn-delete" data-bs-toggle="modal" data-placement="top" title="Delete" data-bs-target="#modalDelete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg></button>                                        
                                    </div>		
                                </td>
                         </tr>`
    });
    return `${tableHead} <tbody> ${tableContent} </tbody>`;
    //document.getElementById("userList").innerHTML = tableGral;
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