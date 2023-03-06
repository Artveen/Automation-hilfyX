import admin from "../fixtures/superAdmin/superAdmin.json"

export function deleteEmployee(userEmail){
    let token;
    let user = {"email":admin.email,"password":admin.passwordHash};
    cy.request ('POST','https://api.stage.dopomo.com.ua/api/admin/login', user) .then(response =>{
      token =  response.body.data.access_token;
      console.log(token);
      console.log(response.body);
    }).then(()=>{
        cy.request({
            url:'https://api.stage.dopomo.com.ua/api/admin/employees?page=1&timezone=120',
            method: 'GET',
            headers: {
                "Accept":"application/json",
                "Authorization": `Bearer ${token}`
            }}).then(response =>{
              let employee =  response.body.data.find(obj =>obj.email === userEmail);
            cy.request({
                url:`https://api.stage.dopomo.com.ua/api/admin/employees/${employee.uuid}`,
                method: 'DELETE',
                headers: {
                    "Accept":"application/json",
                    "Authorization": `Bearer ${token}`
                }}).then(response =>{
                    expect(response.status).equal(204)
            })
            })
        })
}