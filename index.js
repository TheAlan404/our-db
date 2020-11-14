const fs = require("fs");

class DB {
	constructor(options){
		this.options = options || {
			cache: true,
		};
	};
};

class PlainDB extends DB {
	constructor(path, options){
		super(options);
		this.path = path || "database";
		if(!fs.existsSync(__dirname + this.path)){
			fs.mkdirSync(__dirname + this.path);
		};
	};
	get(id){
		let path = __dirname + this.path + "/" + id;
		if(!fs.existsSync(path)) return undefined;
		let dataString = fs.readFileSync(path).toString();
		return dataString;
	};
	set(id, value){
		let path = __dirname + this.path + "/" + id;
		return fs.writeFileSync(path, value);
	};
};

module.exports = {
	PlainDB,
};