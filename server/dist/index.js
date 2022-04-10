"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5000, app = express_1.default();
app.get("/api/v1", (req, res) => {
    res.send("hello !!!!");
});
app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
//# sourceMappingURL=index.js.map