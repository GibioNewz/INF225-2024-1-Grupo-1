import React, {useState, useEffect} from "react";
import axios from "axios";
import { Toast, Row, Col, Button } from "react-bootstrap";

function ValorUF(props){
    const [valorUf, setValoruf] = useState([]);
    const [valorDolar, setValorDolar] = useState([]);
    const [valorEuro, setValorEuro] = useState([]);
    const [valorUtm, setValorUtm] = useState([]);
    const [valorTMC, setValorTMC] = useState([]); // Tasa Máxima Convencional [TMC]
    const [showUf, setShowUf] = useState(true);
    const [showDolar, setShowDolar] = useState(true);
    const [showEuro, setShowEuro] = useState(true);
    const [showUtm, setShowUtm] = useState(true);
    const [showTMC, setShowTMC] = useState(true);
    const toggleShowUf = () => setShowUf(!showUf);
    const toggleShowDolar = () => setShowDolar(!showDolar);
    const toggleShowEuro = () => setShowEuro(!showEuro);
    const toggleShowUtm = () => setShowUtm(!showUtm);
    const toggleShowTMC = () => setShowTMC(!showTMC);


    useEffect(() => {
        var APIkey = "b022097785bd0cdef5584ef20e77d252876995ea";
        axios.get(" https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey="
        +APIkey+
        "&formato=json")
        .then(res => {
            const data = res.data;
            console.log(data);
            setValoruf(data.UFs) 
        });
        axios.get(" https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=b022097785bd0cdef5584ef20e77d252876995ea&formato=json")
        .then(res => {
            const data = res.data;
            console.log("data", data);
            setValorDolar(data.Dolares)
        }).catch((error) => {
            console.error("Precio Dolar no disponible", error);
            setValorDolar([{Valor: "Precio Dolar no disponible"}]);
        });
        axios.get(" https://api.cmfchile.cl/api-sbifv3/recursos_api/euro?apikey=b022097785bd0cdef5584ef20e77d252876995ea&formato=json")
        .then(res => {
            const data = res.data;
            console.log("data", data);
            setValorEuro(data.Euros)
        }).catch((error) => {
            console.error("Precio Euro no disponible", error);
            setValorEuro([{Valor: "Precio Euro no disponible"}]);
        });
        axios.get(" https://api.cmfchile.cl/api-sbifv3/recursos_api/utm?apikey=b022097785bd0cdef5584ef20e77d252876995ea&formato=json")
        .then(res => {
            const data = res.data;
            console.log("data", data);
            setValorUtm(data.UTMs)
        }).catch((error) => {
            console.error("Precio UTM no disponible", error);
            setValorUtm([{Valor: "Precio UTM no disponible"}]);
        });
        axios.get(" https://api.cmfchile.cl/api-sbifv3/recursos_api/tmc/2024?apikey=b022097785bd0cdef5584ef20e77d252876995ea&formato=json")
        .then(res => {
            const data = res.data;
            console.log("data", data);
            setValorTMC(data.TMCs)
        }).catch((error) => {
            console.error("Precio TMC no disponible", error);
            setValorTMC([{Valor: "Precio TMC no disponible"}]);
        });
        

    }, []);
        
    return(
        <Row>
            {/* UF */}
            <Col  md={6} className="mb-2 d-flex flex-column align-items-start">
                <Button onClick={toggleShowUf} className="mb-2">
                Mostrar <strong>valor UF</strong> del día.
                </Button>
                <Toast show={showUf} onClose={toggleShowUf}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">ValorUF</strong>
                    <small>{valorUf[0] && valorUf[0].Fecha}</small>
                </Toast.Header>
                <Toast.Body>{valorUf[0] && <div>{valorUf[0].Valor}</div>}
                </Toast.Body>
                </Toast>
            </Col>
            {/* DOLAR */}
            <Col  md={6} className="mb-2 d-flex flex-column align-items-start">
                <Button onClick={toggleShowDolar} className="mb-2">
                Mostrar <strong>valor dolar</strong> del día.
                </Button>
                <Toast show={showDolar} onClose={toggleShowDolar}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Valor Dolar</strong>
                    <small>{valorDolar[0] && valorDolar[0].Fecha}</small>
                </Toast.Header>
                <Toast.Body>{valorDolar[0] && <div>{valorDolar[0].Valor}</div>}
                </Toast.Body>
                </Toast>
            </Col>
            {/* EURO */}
            <Col  md={6} className="mb-2 d-flex flex-column align-items-start">
                <Button onClick={toggleShowEuro} className="mb-2">
                Mostrar <strong>valor EURO</strong> del día.
                </Button>
                <Toast show={showEuro} onClose={toggleShowEuro}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Valor Euro</strong>
                    <small>{valorEuro[0] && valorEuro[0].Fecha}</small>
                </Toast.Header>
                <Toast.Body>{valorEuro[0] && <div>{valorEuro[0].Valor}</div>}
                </Toast.Body>
                </Toast>
            </Col>
            {/* UTM */}
            <Col  md={6} className="mb-2 d-flex flex-column align-items-start">
                <Button onClick={toggleShowUtm} className="mb-2">
                Mostrar <strong>valor UTM</strong> del día.
                </Button>
                <Toast show={showUtm} onClose={toggleShowUtm}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Valor UTM</strong>
                    <small>{valorUtm[0] && valorUtm[0].Fecha}</small>
                </Toast.Header>
                <Toast.Body>{valorUtm[0] && <div>{valorUtm[0].Valor}</div>}
                </Toast.Body>
                </Toast>
            </Col>
            {/* TMC */}
            <Col  md={6} className="mb-2 d-flex flex-column align-items-start">
                <Button onClick={toggleShowTMC} className="mb-2">
                Mostrar <strong>valor TMC</strong> del día.
                </Button>
                <Toast show={showTMC} onClose={toggleShowTMC}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Valor TMC</strong>
                    <small>{valorTMC[0] && valorTMC[0].Fecha}</small>
                </Toast.Header>
                <Toast.Body>{valorTMC[0] && <div>{valorTMC[0].Valor}</div>}
                </Toast.Body>
                </Toast>
            </Col>
        </Row>
    )
}

export default ValorUF;