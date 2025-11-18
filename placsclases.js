class Item {
	constructor(_tipoItem, _idItem) {
			this._tipoItem = _tipoItem;
			this._idItem = _idItem;
	}

	getId(){
		return this._idItem;
	}
}

const espacios = new Item("Espacio", 1111);
const equipos = new Item("Equipo", 2222);
const accesorios = new Item("Accesorios", 3333)

class Espacio {
	constructor(_nombreEspacio, _idEspacio, _idItem, _imgref, _glosario){
		this._nombreEspacio = _nombreEspacio;
		this._idEspacio = _idEspacio;
		this._idItem = _idItem;
		this._imgref = _imgref;
	}

	NombreEspacio(){
		return this._nombreEspacio;
	}
}

const salaEdicion = new Espacio(salaEdicion, 11, Espacio.getId);
const estudioAudio = new Espacio(estudioAudio, 12, Espacio.getId);
const estudioTelevision = new Espacio(estudioTelevision, 13, Espacio.getId);



class Equipo {
	constructor(_nombreEquipo, _idEquipo, _idItem){
			this._nombreEquipo= _nombreEquipo;
			this._idEquipo= _idEquipo;
			this._idItem = _idItem;
	}
}

const camaraCanon = new Equipo(canon, 21, Equipo.getId);
const camaraSony = new Equipo(cony, 22, Equipo.getId);
