function Calculadora() {

    this.v1 = 0
    this.v2 = 0
    this.op = "+"

    this.getV1 = function() {
        return this.v1
    }

    this.getV2 = function() {
        return this.v2
    }
    this.getOp = function() {
        return this.op
    }

    this.setV1 = function(v) {
        this.v1 = Number.parseInt(v)
    }

    this.setV2 = function(v) {
        this.v2 = Number.parseInt(v)
    }

    this.setOp = function(v) {
        this.op = v
    }

    this.sumar = function() {
        return this.v1 + this.v2
    }

    this.restar = function() {
        return this.v1 - this.v2
    }

    this.multiplicar = function() {
        return this.v1 * this.v2
    }

    this.dividir = function() {
        if (this.v2 != 0)
            return this.v1 / this.v2
        else
            return null
    }

    this.operar = function() {
        switch (this.op) {
            case "+":
                return this.sumar()
            case "-":
                return this.restar()
            case "*":
                return this.multiplicar()
            case "/":
                return this.dividir()
        }
    }
}


var C = new Calculadora()

var actualizarRes = function() {
    $('#res').val(C.sumar())
}

$('#v1').on('input', function() {
    C.setV1($('#v1').val())
    actualizarRes()
})

$('#v2').on('input', function() {
    C.setV2($('#v2').val())
    actualizarRes()
})

$(".o:checked").on('click', function() {
    C.setOp($(".o:checked").val())
    actualizarRes()
})