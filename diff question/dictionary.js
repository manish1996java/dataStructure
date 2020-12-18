function Dictionary(){

    this.datastore = new Array();

    this.add = (key,value) => {
        this.datastore[key] = value;
    }

    this.find = (key) => {
        return this.datastore[key];
    }

    this.remove = (key) => {
        delete this.datastore[key];
    }

    this.showAll = () => {
        console.log('showAll', typeof this.datastore);
        for(let key of Object.keys(this.datastore)){
            console.log(key+" -> "+this.datastore[key]);
        }
    }

    this.sort = () => {
        for(let key of Object.keys(this.datastore).sort()){
            console.log(key+" -> "+this.datastore[key]);
        }
    }

    this.clearAll = () => {
        // this.datastore = {};
        // ----OR---
        for(let key of Object.keys(this.datastore)){
            delete this.datastore[key];
        }
    }

    this.count = () =>{
        console.log('lenght', Object.keys(this.datastore).length);
    }

    
}

let dic = new Dictionary();
dic.add('Mike','123');
dic.add('David','345');
dic.add('Cynthia','456');
dic.add('Cynthia','445');
dic.showAll();
