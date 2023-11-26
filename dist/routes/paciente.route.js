"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paciente_controller_1 = require("../controller/paciente.controller");
const router = (0, express_1.Router)();
router.get("/", paciente_controller_1.getPacientes);
router.get("/:id", paciente_controller_1.getPacientesByID);
router.put("/:id", paciente_controller_1.UpdatePacientes);
router.delete("/:id", paciente_controller_1.DeletePaciente);
router.post("/", paciente_controller_1.CreatePacientes);
exports.default = router;
