import './DeterminacionDeuda.css';
import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf';

function generarPDF() {
    // Crear un nuevo documento PDF
    var doc = new jsPDF();

    // Agregar una imagen al PDF
    const octoPNG =
        "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAtAAAALQCAYAAAC5V0ecAAAQF0lEQVR4nO3dP6j9dR3H8Zepv5agBqU/hi6/IVr7Ay011NSklEFQU0tDETVoNdUSZUMu1dJUo5lGQ5PUbhE0OF1Kw5BIqKglRWo4R36/Sqznj++V0McDLp/P+d7D+3Pu9ryH77l3AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgVemmowZdXFy81OUr2+4+f71v29vO1wAA4Ah/2/b0tl9te2Tbj7c99+9Punr16mEH3nLYpP90z7YHth33agEA4F+9Yds7zl8f33ax7f5tP7qsAy8joG/e9rVt91137S/bHtv21F7iNwIAALhBV7bdue1D296405u3D+/0Ru6Xt71w9IGXEdDXx/Mft31l2/cmnAEAuDxXtn1q21e33b5rPXr/0Qe97uB5H921F/vEtvdu+87EMwAAl+u5bd/dqT+fOF+7b6c+PdSRAX1l27fO+2e3fXjbkwfOBwCA/+bJnTr02fPjB3fwH7E4MqDv3fb28/7+ne53BgCAV9pT27543t+x7WNHDj8yoO8+r89u+8GBcwEAoPr+rr0LfffLPbE6MqDfc15/tu35A+cCAED1/E5dum3vPnLwkQH9lvP6mwNnAgDAjfrteX3rkUOPDOjXn9d/HDgTAABu1J/O6//thwgBAOBVT0ADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCA4MiA/ut5vXLgTAAAuFG3n9fnjhx6ZEA/c17vOnAmAADcqBe79JmXfVZ0ZED/+rx+YNutB84FAIDq1m3vP+9/ceTgIwP60fN627ZPHjgXAACqT+zaLRyPvtwTqyMD+qFtT5/339h254GzAQDgf3XntgfO+9/v1KmHOTKgn9v2hfP+tm0/nfuhAQB4Zd21U4fedn78+W1/P/KAo/+M3UPbvnnev3Pb49s+PfdEAwBwuW7dqTsf36lDt1OXHvru87bddNSgi4uLF7c3b3tw22eu+/aftz227Xfb/nDUmQAAvOa9eadbNj647U3XXf/2ts9te2Hbrl69etiBtxw26ZoXtn1228+3fX3b1Z1+mI9cwlkAAHC9i21f2vbDyzrgMgL6RQ9v+8m2e7fds+1d2+6Y2zkAADjO8zt9UPCX2x7Z6ZaNQ/9xCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArxH/BGPSaGWzropfAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII="

    doc.addImage(octoPNG, 'png', 8, 10, 198, 40);

    doc.addImage(octoPNG, 'png', 8, 68, 198, 50); // Ajusta las coordenadas y el tamaño según tus necesidades

    doc.addImage(octoPNG, 'png', 8, 121, 198, 45); // Ajusta las coordenadas y el tamaño según tus necesidades


    // Agregar texto al PDF
    var texto1 = "RUC: " + localStorage.getItem("RUC");
    var texto2 = "Nombre o Razon Social: " + localStorage.getItem("RazonSocial");
    var texto3 = "Período: " + localStorage.getItem("selectedDate");
    var texto4 = "Semana: 0";
    var texto5 = "Tipo de Declaración: Original";

    var x = 17; // Posición horizontal del texto
    var y = 20; // Posición vertical del texto

    doc.setFontSize(12);
    doc.setFillColor(255, 255, 255); // Establecer color de fondo blanco
    doc.rect(17, 12.5 - 2, 48, 12, 'F'); // Dibujar rectángulo con fondo blanco
    doc.text("Datos de la Declaración", 17, 12.5)
    doc.text(texto1, x, y);
    doc.text(texto2, x, y + 6);
    doc.text(texto3, x, y + 12);
    doc.text(texto4, x, y + 18);
    doc.text(texto5, x, y + 24);

    // Configurar la primera tabla
    var rows = 4;
    var columns = 3;
    var cellWidth = 60;
    var cellHeight = 10;
    var margin = (212.5 - (cellWidth * columns)) / 2;

    var posX = margin;
    var posY = 70; // Incrementar la posición vertical para la tabla

    doc.setDrawColor(0);
    doc.setLineWidth(0.25);

    var tributos = 'Tributos';
    var totalDeuda = 'Total Deuda';
    var montoPago = 'Monto Pago';
    var valorCelda1 = '1011 - IGV - OPER. INT. - CTA. PROPIA';
    /* */
    var valor188 = localStorage.getItem("188");
    var valorCelda2 = valor188 < 0 ? "S/. 0" : "S/." + valor188;
    /* */
    var valor189 = localStorage.getItem("189");
    var valorCelda3 = "S/." + valor189;
    var valorCelda4 = '3121 - RENTA - REGIMEN MYPE TRIBUTARIO';
    /**/
    var valor324 = localStorage.getItem("324");
    var valorCelda5 = "S/." + valor324;
    /**/
    var valor307 = localStorage.getItem("307");
    var valorCelda6 = "S/." + valor307;
    var valorCelda7 = 'Total a pagar';
    /**/

    if (valor188 < 0) {
        valor188 = 0;
    }


    var valorTotal = parseFloat(valor188) + parseFloat(localStorage.getItem("324"));
    var valorCelda8 = "S/." + valorTotal;
    /**/
    var valorTotal2 = parseFloat(localStorage.getItem("189")) + parseFloat(localStorage.getItem("307"));
    var valorCelda9 = "S/." + valorTotal2;

    doc.setFillColor(255, 255, 255); // Establecer color de fondo blanco
    doc.rect(17, 71 - 2, 36, 10, 'F'); // Dibujar rectángulo con fondo blanco
    doc.text("Detalle de tributos", 17, 71); // Dibujar texto


    var fontSize = 10;
    doc.setFontSize(fontSize);

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            doc.line(posX, posY + cellHeight, posX + cellWidth, posY + cellHeight);

            if (i === 0 && j === 0) {
                doc.setFont("helvetica", "bold");
                doc.text(tributos, posX + 2, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (i === 0 && j === 1) {
                doc.setFont("helvetica", "bold");
                doc.text(totalDeuda, posX + 2 + 25, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (i === 0 && j === 2) {
                doc.setFont("helvetica", "bold");
                doc.text(montoPago, posX + 2, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (i === 1 && j === 0) {
                doc.text(valorCelda1, posX + 2, posY + 8);
            } else if (i === 1 && j === 1) {
                doc.text(valorCelda2, posX + 2 + 25, posY + 8);
            } else if (i === 1 && j === 2) {
                doc.text(valorCelda3, posX + 2, posY + 8);
            } else if (i === 2 && j === 0) {
                doc.text(valorCelda4, posX + 2, posY + 8);
            } else if (i === 2 && j === 1) {
                doc.text(valorCelda5, posX + 2 + 25, posY + 8);
            } else if (i === 2 && j === 2) {
                doc.text(valorCelda6, posX + 2, posY + 8);
            } else if (i === 3 && j === 0) {
                doc.text(valorCelda7, posX + 2, posY + 8);
            } else if (i === 3 && j === 1) {
                doc.text(valorCelda8, posX + 2 + 25, posY + 8);
            } else if (i === 3 && j === 2) {
                doc.text(valorCelda9, posX + 2, posY + 8);
            }

            posX += cellWidth;
        }

        posX = margin;
        posY += cellHeight;
    }

    // Configurar la segunda tabla (3 filas)
    rows = 3;
    posY += 20; // Incrementar la posición vertical para la nueva tabla

    // Agregar texto al PDF
    var texto = "Usted no ha realizado el pago de la deuda, recuerde que debera cancelar el saldo deudor de la declaración";
    doc.text(texto, 17, 128);
    var textito = "presentada consignando los siguientes datos:"
    doc.text(textito, 17, 132);
    for (var k = 0; k < rows; k++) {
        for (var z = 0; z < columns; z++) {
            doc.line(posX, posY + cellHeight, posX + cellWidth, posY + cellHeight);

            if (k === 0 && z === 0) {
                doc.setFont("helvetica", "bold");
                doc.text("Periodo", posX + 2, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (k === 0 && z === 1) {
                doc.setFont("helvetica", "bold");
                doc.text("Tributos", posX + 2, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (k === 0 && z === 2) {
                doc.setFont("helvetica", "bold");
                doc.text("Deuda", posX + 2 + 24, posY + 8);
                doc.setFont("helvetica", "normal");
            } else if (k === 1 && z === 0) {
                doc.text("" + localStorage.getItem("selectedDate"), posX + 2, posY + 8);
            } else if (k === 1 && z === 1) {
                doc.text("1011 - IGV - OPER. INT. - CTA. PROPIA", posX + 2, posY + 8);
            } else if (k === 1 && z === 2) {
                doc.text(valorCelda2, posX + 2 + 24, posY + 8);
            } else if (k === 2 && z === 0) {
                doc.text("" + localStorage.getItem("selectedDate"), posX + 2, posY + 8);
            } else if (k === 2 && z === 1) {
                doc.text("3121 - RENTA - REGIMEN MYPE TRIBUTARIO", posX + 2, posY + 8);
            } else if (k === 2 && z === 2) {
                doc.text("S/." + valor324, posX + 2 + 24, posY + 8);
            }

            posX += cellWidth;
        }


        posX = margin;
        posY += cellHeight;
    }

    // Guardar el PDF como un archivo
    doc.save("declaracion.pdf");

    const variables = [
        '304',
        '145',
        '140',
        'Regimen',
        '101',
        'Suma_1',
        'radioSeleccionado',
        '188',
        'TasaPropia',
        'selectedDate',
        '312',
        '100',
        '681',
        '324',
        '302',
        '301',
        '108',
        '682',
        '179',
        '184',
        '107',
        '307',
        'totalAmount',
        '171',
        '189',
        'RazonSocial',
        'RUC'
    ];

    variables.forEach((variable) => {
        if (variable === 'radioSeleccionado') {
            localStorage.setItem(variable, 'false');
        } else {
            localStorage.removeItem(variable);
        }
    });

    window.location.href = '/';


}

export default function DeterminacionDeuda({ setTotalAmount }) {

    const [value140, setValue140] = useState('');
    const [value302, setValue302] = useState('');
    const [value304, setValue304] = useState('');
    const [value145, setValue145] = useState('');
    const [value184, setValue184] = useState('');
    const [value171, setValue171] = useState('');
    const [value179, setValue179] = useState('');
    const [value681, setValue681] = useState('');
    const [value682, setValue682] = useState('');

    const [value188, setValue188] = useState('');
    const [value324, setValue324] = useState('');

    const [value189, setValue189] = useState('');
    const [value307, setValue307] = useState('');

    const localStorageFinal = () => {
        setValue140(localStorage.getItem("101") - localStorage.getItem("108"))
        setValue302(localStorage.getItem("312"))
        setValue184((localStorage.getItem("101") - localStorage.getItem("108")) - localStorage.getItem("145"))


        localStorage.setItem("140", localStorage.getItem("101") - localStorage.getItem("108"))
        localStorage.setItem("302", localStorage.getItem("312"))

        setValue304(localStorage.getItem("302"))
        localStorage.setItem("304", localStorage.getItem("302"))

        setValue682(localStorage.getItem("304"))
        localStorage.setItem("682", localStorage.getItem("304"))

        localStorage.setItem("184", (localStorage.getItem("101") - localStorage.getItem("108")) - localStorage.getItem("145"));

        setValue188(localStorage.getItem("681"));
        localStorage.setItem("188", localStorage.getItem("681"));

        setValue324(localStorage.getItem("682"));
        localStorage.setItem("324", localStorage.getItem("682"));

        const storedValue = localStorage.getItem('145');
        if (storedValue) {
            setValue145(storedValue);
        }

        const storedValue171 = localStorage.getItem('171');
        if (storedValue171) {
            setValue171(storedValue171);
        }

        const storedValue179 = localStorage.getItem('179');
        if (storedValue179) {
            setValue179(storedValue179);
        }

        const storedValue681 = localStorage.getItem('681');
        if (storedValue681) {
            setValue681(storedValue681);
        }

        const storedValue188 = localStorage.getItem('188');
        if (storedValue188) {
            setValue188(storedValue188);
        }

        const storedValue324 = localStorage.getItem('324');
        if (storedValue324) {
            setValue324(storedValue324);
        }

        const storedValue189 = localStorage.getItem('189');
        if (storedValue189) {
            setValue189(storedValue189);
        }

        const storedValue307 = localStorage.getItem('307');
        if (storedValue307) {
            setValue307(storedValue307);
        }

        const resta = localStorage.getItem("184") - localStorage.getItem("171") - localStorage.getItem("179");
        localStorage.setItem("681", resta)
        setValue681(localStorage.getItem("681"));
    }

    const handleChange1 = (event) => {
        const value = event.target.value;
        setValue145(value);
        localStorage.setItem("145", value);

        const resta_1 = value140 - value;
        localStorage.setItem("184", resta_1)
        setValue184(localStorage.getItem("184"));


        const resta = localStorage.getItem("184") - localStorage.getItem("171") - localStorage.getItem("179");
        localStorage.setItem("681", resta)
        setValue681(localStorage.getItem("681"));

        setValue188(localStorage.getItem("681"));
        localStorage.setItem("188", localStorage.getItem("681"));
    };

    const handleChange171 = (event) => {
        const value = event.target.value;
        setValue171(value);
        localStorage.setItem("171", value);


        const local184 = localStorage.getItem("184");
        const local179 = localStorage.getItem("179");


        const resta = local184 - value - local179;
        localStorage.setItem("681", resta)
        setValue681(localStorage.getItem("681"));

        setValue188(localStorage.getItem("681"));
        localStorage.setItem("188", localStorage.getItem("681"));
    };

    const handleChange179 = (event) => {
        const value = event.target.value;
        setValue179(value);
        localStorage.setItem("179", value);

        const local184 = localStorage.getItem("184");
        const local171 = localStorage.getItem("171");


        const resta = local184 - local171 - value;
        localStorage.setItem("681", resta)
        setValue681(localStorage.getItem("681"));
        setValue188(localStorage.getItem("681"));
        localStorage.setItem("188", localStorage.getItem("681"));
    };

    const handleChange189 = (event) => {
        const value = event.target.value;
        setValue189(value);
        localStorage.setItem("189", value);

    };

    const handleChange307 = (event) => {
        const value = event.target.value;
        setValue307(value);
        localStorage.setItem("307", value);

    };

    const handleValidarClick = () => {
        const variables = ['100', '107', '301', '189', '307'];
        const emptyVariables = variables.filter((variable) => !localStorage.getItem(variable));

        if (emptyVariables.length > 0) {
            alert(`Las siguientes variables están vacías: ${emptyVariables.join(', ')}`);
        } else {
            alert('¡Todo está correcto!');
        }
    };

    useEffect(() => {
        localStorageFinal();
        const total = Number(value189) + Number(value307);
        setTotalAmount(total);
        localStorage.setItem('totalAmount', total.toString());
    }, [value189, value307, setTotalAmount]);

    return (
        <>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <div class="card" style={{ width: '80%' }}>
                    <div class="card-header">
                        <i class="fa-solid fa-caret-up"></i>
                        <strong>Aplicación de saldos a favor y otros créditos</strong>
                    </div>
                    <span className='text-center mt-4'>IGV</span>
                    <span className='text-center'>RENTA</span>
                    <div class="group-box-content ms-4 me-4">
                        <p>Impuesto resultante o Saldo a favor</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">140</span>
                            <input type="text" class="form-control input-to-right" disabled value={value140} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">302</span>
                            <input type="text" class="form-control input-to-right" disabled value={value302} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Saldo a favor del periodo anterior</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">145</span>
                            <input type="text" class="form-control input-to-right" onChange={handleChange1} value={value145} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">303</span>
                            <input type="text" class="form-control input-to-right" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Tributo a pagar o saldo a favor</p>
                        <div class="input-group">
                            <span class="input-group-text">184</span>
                            <input type="text" class="form-control input-to-right" disabled value={value184} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">304</span>
                            <input type="text" class="form-control input-to-right" disabled value={value304} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Percepciones del periodo</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">171</span>
                            <input type="text" class="form-control input-green-custom-edit input-to-right" onChange={handleChange171} value={value171} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Saldos de percepciones de períodos anteriores</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">168</span>
                            <input type="text" class="form-control input-to-right" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Saldo de percepciones no aplicadas</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">164</span>
                            <input type="text" class="form-control text-to-right-edit" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Retenciones del período</p>
                        <div class="input-group">
                            <span class="input-group-text">179</span>
                            <input type="text" class="form-control input-green-custom-edit" onChange={handleChange179} value={value179} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">326</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Saldo de Retenciones de períodos anteriores</p>
                        <div class="input-group">
                            <span class="input-group-text">176</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">327</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Saldo de retenciones no aplicadas</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">165</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Compensación saldo a favor del exportador</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text">305</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Impuestos temporal a los activos netos</p>
                        <div class="input-group">
                            <span class="input-group-text">328</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4">
                        <p>Pagos a Cuenta en exceso</p>
                        <div class="input-group">
                            <span class="input-group-text">336</span>
                            <input type="text" class="form-control input-green-custom-edit" />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-4' >
                <div class="card bg-subtotal" style={{ width: '80%' }}>
                    <div class="group-box-content ms-4 me-4 mt-4">
                        <strong className='ms-1'>SUB TOTAL</strong>
                        <div class="input-group">
                            <span class="input-group-text">681</span>
                            <input type="text" class="form-control input-to-right" disabled value={value681} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">682</span>
                            <input type="text" class="form-control input-to-right" disabled value={value682} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4 mt-4">
                        <p className='ms-1'>Pagos previos</p>
                        <div class="input-group">
                            <span class="input-group-text">185</span>
                            <input type="text" class="form-control input-green-custom-edit" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">317</span>
                            <input type="text" class="form-control input-green-custom-edit" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4 mt-4">
                        <p className='ms-1'>Interés moratorio</p>
                        <div class="input-group">
                            <span class="input-group-text">187</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">319</span>
                            <input type="text" class="form-control" disabled />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-4' >
                <div class="card bg-subtotal" style={{ width: '80%' }}>
                    <div class="group-box-content ms-4 me-4 mt-4">
                        <p className='ms-1'>Total Deuda Tributaria</p>
                        <div class="input-group">
                            <span class="input-group-text">188</span>
                            <input type="text" class="form-control input-to-right" disabled value={value188} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">324</span>
                            <input type="text" class="form-control input-to-right" disabled value={value324} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div class="group-box-content ms-4 me-4 mt-4">
                        <p className='ms-1'>Importe a Pagar</p>
                        <div class="input-group">
                            <span class="input-group-text">189</span>
                            <input type="text" class="form-control input-to-right" onChange={handleChange189} value={value189} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">307</span>
                            <input type="text" class="form-control input-to-right" onChange={handleChange307} value={value307} />
                            <span class="input-group-text">
                                <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-5">
                <button class="btn btn-light mx-2">
                    <i class="fa-sharp fa-solid fa-caret-left mr-1 me-1"></i>
                    Anterior
                </button>
                <button class="btn bg-button-pdf mx-2" onClick={generarPDF}>
                    <i class="fas fa-plus mr-1 me-1"></i>
                    Agregar a bandeja
                </button>
                <button class="btn bg-button-validar mx-2" onClick={handleValidarClick}>
                    <i class="fa-solid fa-paste mr-1 me-1"></i>
                    Validar
                </button>
            </div>

            <br /><br /><br /><br />
        </>
    )
}
