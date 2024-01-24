import express from "express";
import { getPelanggan, getPelangganById, createPelanggan, deletePelanggan } from "../controllers/PelangganController.js";

const router = express.Router();

router.get('/pelanggan', getPelanggan);
router.get('/pelanggan/:idPelanggan', getPelangganById)
router.post('/pelanggan', createPelanggan);
router.delete('/pelanggan/:idPelanggan', deletePelanggan)

export default router;