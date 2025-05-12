import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "D:\\My Journey\\Web Development\\JavaScript\\video92 exercise 15 clear the clutter solution";

let files = await fs.readdir(basepath);
// the above code will return the set of array of all the elements items contained in the particular folder  
// console.log(files);

for (const item of files) {
    // let ext = item.split(".");
    // the above code will split the incoming string with "." and will store the splitted word as different elements of an array

    // CONFUSING PART : this is as an array --> item.split(".") where every of its element is separated by "."

    // we want the last item of the splitted elements array so we will use the below code 
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(ext);
    if( ext!="js" && ext!="json" && item.split(".").length > 1){

        if(fsn.existsSync(path.join(basepath,ext))){
            // checks if the directory exits or not
            // if the "ext" named directory exists then we need to move the file with same extensions as the directory name 
            // to that directory
    
            // Move the file to this directory if its not a JS or JSON file
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }
        else{
            fs.mkdir(ext);
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
            // the above code creates a directory with the "ext" name
        }
        console.log(item);
    }
}