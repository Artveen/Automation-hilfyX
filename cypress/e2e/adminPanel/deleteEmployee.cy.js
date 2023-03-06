import {deleteEmployee} from "../../support/helper"
describe('Delete employee by uuid',()=>{
    it('Delete employee',()=> {
        deleteEmployee('test.master+333@gmail.com')
        //cy.request('DELETE','https://api.stage.dopomo.com.ua/api/admin/employees/');})
    })
})