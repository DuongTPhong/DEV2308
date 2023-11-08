var listItems = [
    {
        id: 1,
        name: "sản phẩm 1",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 20000
    },
    {
        id: 2,
        name: "sản phẩm 2",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 30000
    },
    {
        id: 3,
        name: "sản phẩm 3",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 50000
    },
    {
        id: 4,
        name: "sản phẩm 4",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 80000

    },
    {
        id: 5,
        name: "sản phẩm 1",
        img: "https`://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 20000

    },
    {
        id: 6,
        name: "sản phẩm 2",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 30000

    },
    {
        id: 7,
        name: "sản phẩm 3",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 60000

    },
    {
        id: 8,
        name: "sản phẩm 4",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test",
        price: 90000

    },
]



function showItems(size){
    $('#list-items').html('');

    for(let i=0; i < size && i < listItems.length; i++){
        var item = `<div class="col-3">
                    <div class="card">
                        <img src="https://devmaster.edu.vn/uploads/images/course/java_form.jpg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${listItems[i].name}</h5>
                        <p class="card-text">${listItems[i].content}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`
        $('#list-items').append(item) 
    }
}

function search(){
    var title = $(".search").val();
    $('#list-items').html('');
// includes: "chuỗi giá trị".includes("giá trị so sánh")
// convert string: uper / lower
// "dev master" != "dev   master" => replaceAll(" ", "")
    for(let i=0; i < listItems.length; i++){
        if(listItems[i].name.toLowerCase.includes(title.toLowerCase())){  
            // if(listItems[i].name == title){                    
        var item = `<div class="col-3">
                        <div class="card">
                            <img src="https://devmaster.edu.vn/uploads/images/course/java_form.jpg" class="card-img-top w-100" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
$('#list-items').append(item)
        } 
    }
}


function check(){
    var title = $(".search-price").val();
    $('#list-items').html('');
    for(let i=0; i< listItems.length; i++){
        if(listItems[i].price <= title){                   
        var item = `<div class="col-3">
                        <div class="card">
                            <img src="https://devmaster.edu.vn/uploads/images/course/java_form.jpg" class="card-img-top w-100" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].content}</p>
                            <p class="card-text">${listItems[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
$('#list-items').append(item)
        } 
    }
}

