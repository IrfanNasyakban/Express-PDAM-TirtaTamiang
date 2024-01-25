import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Pengaduan = db.define('pengaduan', {
    idPelanggan: {
        type: DataTypes.INTEGER,
    },
    nama: {
        type: DataTypes.STRING
    },
    noTelepon: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING
    },
    tanggal: {
        type: DataTypes.DATE
    },
    sumberPengaduan: {
        type: DataTypes.STRING
    },
    pengaduanMelalui: {
        type: DataTypes.STRING
    },
    isiPengaduan: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Pengaduan;

(async()=> {
    await db.sync();
})();