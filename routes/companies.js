const express = require("express");
const {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  createContactByCompanyId,
  getContactsByCompanyId,
  getInvoicesByCompanyId,
  createInvoiceByCompanyId,
} = require("../controller/companies");

const router = express.Router();

router
  .route("/:id/invoices")
  .get(getInvoicesByCompanyId)
  .post(createInvoiceByCompanyId);

router
  .route("/:id/contacts")
  .post(createContactByCompanyId)
  .get(getContactsByCompanyId);

router.route("/:id").put(updateCompany).delete(deleteCompany);

router.route("/").get(getCompanies).post(createCompany);

module.exports = router;
