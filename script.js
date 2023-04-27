///xml 

let requist  = new XMLHttpRequest();

requist.addEventListener('load',function(){
    console.log(this.responseText);
});
;
requist.open('GET','https://jsonplaceholder.typicode.com/posts/1/comments');
requist.send();
   
