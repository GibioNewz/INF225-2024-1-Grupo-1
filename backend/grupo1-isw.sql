--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuarios" (
    rut integer NOT NULL,
    nombre character varying(255),
    email character varying(255) NOT NULL,
    "tipoUsuario" integer,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public."Usuarios" OWNER TO postgres;

--
-- Name: prestamos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prestamos (
    id integer NOT NULL,
    tasa numeric,
    valor_uf numeric,
    plazo integer,
    cuota_uf numeric,
    total numeric,
    valor_credito numeric,
    rut_cliente integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "createdBy" integer NOT NULL
);


ALTER TABLE public.prestamos OWNER TO postgres;

--
-- Name: prestamos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prestamos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.prestamos_id_seq OWNER TO postgres;

--
-- Name: prestamos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prestamos_id_seq OWNED BY public.prestamos.id;


--
-- Name: prestamos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamos ALTER COLUMN id SET DEFAULT nextval('public.prestamos_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20231102175730-create-vendedor.js
20231102233808-addPassw.js
20231103035809-create-prestamo.js
20231106200617-defaultdate.js
\.


--
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuarios" (rut, nombre, email, "tipoUsuario", "createdAt", "updatedAt", password) FROM stdin;
1	vendedor1	vendedor1@usm.cl	1	2024-04-21 16:43:25.989-04	2024-04-21 16:43:25.989-04	$2b$10$5ErYybvBMRDDmuj9B1n8d.mFnuZk9FpvPtVQQWBLIW4Q3AIZzgMr2
2	vendedor2	vendedor2@usm.cl	1	2024-04-21 16:43:48.426-04	2024-04-21 16:43:48.426-04	$2b$10$wwrUfodBHFS6s47nDVT/n.mFk1l5ISKPvX3.XRhDPiEx0y5PNJw6S
3	cliente1	cliente1@usm.cl	0	2024-04-21 16:44:15.034-04	2024-04-21 16:44:15.034-04	$2b$10$RoIzHQ8cD89Wd/czROSp4OS8BhbeZ.d4VZh9/g.GETPd8TUuiIG3C
10	analista	analista@usm.cl	2	2024-04-21 16:51:26.918-04	2024-04-21 16:51:26.918-04	$2b$10$Wdl2wF2DgTm.Nn3VOysk.Olee2SfYGAK8GTt3lqAv4zbegkUaNNW.
\.


--
-- Data for Name: prestamos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prestamos (id, tasa, valor_uf, plazo, cuota_uf, total, valor_credito, rut_cliente, "createdAt", "updatedAt", "createdBy") FROM stdin;
2	2	37217.38	4	10.125	40.5	5	3	2024-04-21 16:48:14.909-04	2024-04-21 16:48:14.909-04	1
3	5	37217.38	22	3060000	67320000	612000	3	2024-04-21 17:28:51.829-04	2024-04-21 17:28:51.829-04	2
\.


--
-- Name: prestamos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prestamos_id_seq', 3, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Usuarios Usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_email_key" UNIQUE (email);


--
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (rut);


--
-- Name: prestamos prestamos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamos
    ADD CONSTRAINT prestamos_pkey PRIMARY KEY (id);


--
-- Name: prestamos prestamos_createdBy_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamos
    ADD CONSTRAINT "prestamos_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."Usuarios"(rut);


--
-- Name: prestamos prestamos_rut_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamos
    ADD CONSTRAINT prestamos_rut_cliente_fkey FOREIGN KEY (rut_cliente) REFERENCES public."Usuarios"(rut);


--
-- PostgreSQL database dump complete
--

