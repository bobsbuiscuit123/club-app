// controllers/memberController.js
const Member = require('../models/Member');

async function listMembers(req, res) {
  res.json(await Member.find());
}

async function createMember(req, res) {
  const m = await Member.create(req.body);
  res.status(201).json(m);
}

async function deleteMember(req, res) {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ message: 'Removed' });
}

module.exports = { listMembers, createMember, deleteMember };
