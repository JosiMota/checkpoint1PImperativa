function microondas(comida, tempo) {
    if (comida == "pipoca") {
        if (tempo > 2 * 10 && 3 * 10) {
            return "a comida queimou"
        }
        else if (tempo < 10) {
            return "tempo insuficiente"
        }
        else if (tempo > 3 * 10) {
            return "kabum"
        }
        else {
            return "Bom prato, bom apetite"
        }
    }
    else if (comida == "macarrao") {
        if (tempo > 2 * 8 && 3 * 10) {
            return "a comida queimou"
        }
        else if (tempo < 8) {
            return "tempo insuficiente"
        }
        else if (tempo > 3 * 8) {
            return "kabum"
        }
        else {
            return "Bom prato, bom apetite"
        }
    }
    else if (comida == "carne") {
        if (tempo > 2 * 15 && 3 * 10) {
            return "a comida queimou"
        }
        else if (tempo < 15) {
            return "tempo insuficiente"
        }
        else if (tempo > 3 * 15) {
            return "kabum"
        }
        else {
            return "Bom prato, bom apetite"
        }
    }
    else if (comida == "feijao") {
        if (tempo > 2 * 12 && 3 * 10) {
            return "a comida queimou"
        }
        else if (tempo < 12) {
            return "tempo insuficiente"
        }
        else if (tempo > 3 * 12) {
            return "kabum"
        }
        else {
            return "Bom prato, bom apetite"
        }
    }
    else if (comida == "brigadeiro") {
        if (tempo > 2 * 8 && 3 * 10) {
            return "a comida queimou"
        }
        else if (tempo < 8) {
            return "tempo insuficiente"
        }
        else if (tempo > 3 * 8) {
            return "kabum"
        }
        else {
            return "Bom prato, bom apetite"
        }
    }
    else {
        return "Prato inexistente"
    }
}
console.log(microondas("pipoca", 10))
