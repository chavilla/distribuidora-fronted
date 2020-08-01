export  const uploadImage=(url, files, name)=>{
    return new Promise((resolve,reject)=>{
        var formData=new FormData();
        var xhr=new XMLHttpRequest();

        for (let index = 0; index < files.length; index++) {
            formData.append(name,files[index],files[index].name); 
        }

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4){
                if (xhr.status==200){
                    resolve(JSON.parse(xhr.response));
                }
                else{
                    reject(xhr.response);
                }
            }
        }
        xhr.open('POST', url,true);
        xhr.send(formData);
    })
}