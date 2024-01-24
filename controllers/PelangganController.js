import Pelanggan from "../models/PelangganModel.js";
import moment from 'moment';
import { Op } from "sequelize"

export const getPelanggan = async (req, res) => {
    try {
        const pelanggan = await Pelanggan.findAll();
        res.json(pelanggan);
    } catch (error) {
        console.log(error);
    }
};

export const getPelangganById = async (req, res) => {
    try {
        const response = await Pelanggan.findOne({
            where: {
                idPelanggan: req.params.idPelanggan,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createPelanggan = async (req, res) => {
    const { nama, alamat, zona, waktuTagihan, golonganRumah, jumlahBiaya } = req.body;
    try {

        const existingPelangganCount = await Pelanggan.count({
            where: {
                createdAt: {
                    [Op.ne]: null, // Menghindari null values (createdAt sudah ada)
                },
            },
        });

        const idPelanggan = (1000 + existingPelangganCount + 1).toString().padStart(4, '0');
        const noTagihan = `NO${(existingPelangganCount + 1).toString().padStart(3, '0')}`;
        const formattedDate = moment(waktuTagihan, 'MM/DD/YYYY').format('MM/DD/YYYY');

        await Pelanggan.create({
            idPelanggan: idPelanggan,
            noTagihan: noTagihan,
            nama: nama,
            alamat: alamat,
            zona: zona,
            waktuTagihan: formattedDate,
            golonganRumah: golonganRumah,
            jumlahBiaya: jumlahBiaya,
        });

        res.json({ msg: "Data Created" });
    } catch (error) {
        console.log(error);
    }
};

export const deletePelanggan = async (req, res) => {
    try {
      await Pelanggan.destroy({
        where: {
          idPelanggan: req.params.idPelanggan,
        },
      });
      res.status(200).json({ msg: "Pelanggan Deleted" });
    } catch (error) {
      console.log(error.message);
    }
  };