//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all Contact" });
};

//@desc Create New contact
//@route Post /api/contacts
//@access public

const createContact = (req, res) => {
  console.log("The request body is:", req.body);
  const { name, phoneNumber, email } = req.body || {};
  if (!name || !phoneNumber || !email) {
    res.status(400);
    throw res.json({ message: "lỗi" });
    // throw new Error("All fields are mandatory !");
  }
  res.status(200).json({ message: "Create Contact" });
};

//@desc Create New contact
//@route get /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contacts for ${req.params.id}` });
};

//@desc update contact
//@route Post /api/contacts
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contacts for ${req.params.id}` });
};

//@desc delete contact
//@route delete /api/contacts
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
