const psicologas = require("../models/psicologasModels.js");

const SECRET = `${process.env.TOKEN_SECRET}`;

const getPsicologas = (req, res) => {
    psicologas.find((err, psicologas) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).json(psicologas);
    }
  });
};

const getByEstado = async (req, res) => {
  try {
    const { estado } = req.query;
    const findEstado = await psicologas.find({ estado: estado });
    res.status(200).json(findEstado);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getByCidade = async (req, res) => {
  try {
    const { cidade: cidade } = req.query;
    const findCidade = await psicologas.find({ cidade: cidade });
    res.status(200).json(findCidade);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getIdPsicologas = (req, res) => {
  const id = req.params.id;

  psicologas.findById(id, (err, psicologas) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Id Psicologa not found` });
    } else {
      res.status(200).send(psicologas);
    }
  });
};

const createPsicologa = async (req, res) => {
  try {
    
    const { nome, cidade, estado, contato, email } = req.body;

    const newPsicologa = new psicologa({
      nome,
      cidade,
      estado,
      contato,
      email,
    });
    const savedPsicologa = await newPsicologa.save();
    res.status(201).json(savedPsicologa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePsicologa = async (req, res) => {
  try {
    
    const { nome, cidade, estado, contato, email } = req.body;

    await psicologas.findByIdAndUpdate(req.params.id, {
      nome,
      cidade,
      estado,
      contato,
      email,
    });
    const doulaUpdated = await psicologas.findById(req.params.id);
    res.status(200).json(psicologaUpdated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePsicologas = async (req, res) => {
  try {
    
    const { id } = req.params;
    const findByIdAndDelete = await psicologas.findByIdAndDelete(id);

    if (findByIdAndDelete == null) {
      return res.status(404).json({ message: `ID psicologas ${id} not found ` });
    }

    await findByIdAndDelete.remove();

    res.status(200).json({ message: "Psicologa deleted" });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getPsicologas,
  getByEstado,
  getByCidade,
  getIdPsicologas,
  createPsicologa,
  updatePsicologa,
  deletePsicologas,
};
