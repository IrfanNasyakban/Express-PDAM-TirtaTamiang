import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Pelanggan = db.define('pelanggan', {
    idPelanggan: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: false
    },
    noTagihan: {
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING
    },
    zona: {
        type: DataTypes.STRING
    },
    waktuTagihan: {
        type: DataTypes.STRING
    },
    golonganRumah: {
        type: DataTypes.STRING
    },
    jumlahBiaya: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Pelanggan;

(async()=> {
    await db.sync();
})();