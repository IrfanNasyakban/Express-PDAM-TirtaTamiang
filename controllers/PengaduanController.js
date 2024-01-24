import Pengaduan from "../models/PengaduanModel.js";
import moment from 'moment-timezone';

export const getPengaduan = async (req, res) => {
    try {
        const pengaduan = await Pengaduan.findAll();
        res.json(pengaduan);
    } catch (error) {
        console.log(error);
    }
};

export const createPengaduan = async (req, res) => {
    const { idPelanggan, nama, noTelepon, alamat, tanggal, sumberPengaduan, pengaduanMelalui, isiPengaduan } = req.body;
    try {
        const formattedDate = moment(tanggal, 'MM/DD/YYYY').format('MM/DD/YYYY');

        await Pengaduan.create({
            idPelanggan: idPelanggan,
            nama: nama,
            noTelepon: noTelepon,
            alamat: alamat,
            tanggal: formattedDate,
            sumberPengaduan: sumberPengaduan,
            pengaduanMelalui: pengaduanMelalui,
            isiPengaduan: isiPengaduan,
        });

        res.json({ msg: "Data Created" });
    } catch (error) {
        console.log(error);
    }
};

export const deletePengaduan = async (req, res) => {
    try {
        await Pengaduan.destroy({
            where: {
                idPelanggan: req.params.idPelanggan,
            },
        });
        res.status(200).json({ msg: "Pengaduan Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};