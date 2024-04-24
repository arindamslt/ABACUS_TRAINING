var product={
    pid:'P1',
    pname:'TV',
    pqty:5,
    price:25000.00
}
console.log(product);
console.log(product.pname,product.price);
//ADD ANOTHER ELEMENTS IN THE EXISTING OBJECT
product.company='SAMSUNG';
console.log(product);
//DELETE THE ELEMENTS IN OBEJCT
delete product.company;
console.log(product);
//UPDATE THE CONTENT OF ELEMENT IN OBJECT
product.pname='TAB';
console.log(product);
//NESTED OBJECT
var employee={
    empid:101,
    ename:'ARUP',
    desig:'MANAGER',
    address:{
      plotno:'AD10',
      streetnm:'SALTLAKE',
      pincode:'700091',
      area:{
           ps:'BIDHANNAGAR',
           dist:'24PGSNORTH'
        }
    }
}
console.log(employee);
console.log(employee.ename,employee.desig,employee.address.plotno,employee.address.area.ps,employee.address.area.dist);
var products={
    pid:'P1',
    pname:'TV',
    pqty:5,
    price:25000.00,
    totalprice:function(){
        console.log(this.pqty*this.price);
    }
}
products.totalprice();
var obj2={
    id:10,
    name:'ARIJIT',
    phno:'45454',
    email:'ar@gmail,com'
}
console.log(obj2);
var{name,phno}=obj2;
console.log(name,phno);
