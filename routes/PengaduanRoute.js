import express from "express";
import { getPengaduan, createPengaduan, deletePengaduan } from "../controllers/PengaduanController.js";

const router = express.Router();

router.get('/pengaduan', getPengaduan);
router.post('/pengaduan', createPengaduan);
router.delete('/pengaduan/:idPelanggan', deletePengaduan)

export default router;