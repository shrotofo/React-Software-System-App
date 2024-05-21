function Validation(values){
    let error={}
    if (values.email===""){
        error.email="name not empty"
    }
    else{
        error.email=""
    }
    if (values.password===""){
        error.email="name not empty"
    }
    else{
        error.password=""
    }
    if (values.GroupID===""){
        error.GroupID="name not empty"
    }
    else{
        error.GroupID=""
    }
    if (values.GroupCode===""){
        error.GroupCode="name not empty"
    }
    else{
        error.GroupCode=""
    }
    if (values.GroupDesc===""){
        error.GroupDesc="name not empty"
    }
    else{
        error.GroupDesc=""
    }
    if (values.ContactPerson===""){
        error.ContactPerson="name not empty"
    }
    else{
        error.ContactPerson=""
    }
    if (values.Designatiom===""){
        error.Designation="name not empty"
    }
    else{
        error.Designation=""
    }
    if (values.MobileNumber===""){
        error.MobileNumber="name not empty"
    }
    else{
        error.MobileNumber=""
    }
    if (values.Users===""){
        error.Users="name not empty"
    }
    else{
        error.Users=""
    }
    if (values.RegisterDate===""){
        error.RegisterDate="name not empty"
    }
    else{
        error.RegisterDate=""
    }
    if (values.Country===""){
        error.Country="name not empty"
    }
    else{
        error.Country=""
    }
    if (values.name===""){
        error.name="name not empty"
    }
    else{
        error.name=""
    }
    if (values.designation===""){
        error.designation="name not empty"
    }
    else{
        error.designation=""
    }
    if (values.ID===""){
        error.ID="name not empty"
    }
    else{
        error.ID=""
    }
    if (values.address===""){
        error.address="name not empty"
    }
    else{
        error.address=""
    }
    if (values.Modules===""){
        error.Modules="name not empty"
    }
    else{
        error.Modules=""
    }
    return error;
}

export default Validation;