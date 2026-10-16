import { useState, useEffect, useMemo } from "react";

/* ============================================================
   Sistema de Gestión de Notebooks — Instituto Técnico Renault
   Un solo archivo: React + Tailwind CSS, íconos SVG nativos.
   ============================================================ */

// ---------- Configuración visual ----------
// Pegá acá la URL (o import) de la foto de la fachada del colegio.
// Si queda vacío se muestra un degradado de cielo/pasto como fondo.
const FACHADA_URL = "";

const AZUL = "#0047AB"; // azul de la barra lateral y botones (tomado de las imágenes)
const GRIS_BARRA = "#6b6b6b";
const GRIS_TITULO = "#8b8984";
const GRIS_FONDO = "#f2f3f5";
const GRIS_TARJETA = "#c8cfd9";
const GRIS_TARJETA_2 = "#d9d9d9";
const FUENTE = "'Open Sans', 'Segoe UI', system-ui, sans-serif";

// ---------- Íconos SVG nativos ----------
const Svg = ({ className = "w-6 h-6", children, fill = "none", stroke = "currentColor", sw = 1.8 }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={className}
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconLaptop = ({ className }) => (
  <Svg className={className}>
    <rect x="4" y="4.5" width="16" height="11" rx="1.2" />
    <path d="M2 19.5h20l-1.8-4H3.8z" />
  </Svg>
);
const IconHome = ({ className }) => (
  <Svg className={className} fill="currentColor" stroke="none">
    <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z" />
  </Svg>
);
const IconPlus = ({ className }) => (
  <Svg className={className} sw={1.6}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M6 12h12" />
  </Svg>
);
const IconRefresh = ({ className }) => (
  <Svg className={className} sw={1.6}>
    <path d="M20 12a8 8 0 0 0-13.7-5.6L4 8.7" />
    <path d="M4 4v4.7h4.7" />
    <path d="M4 12a8 8 0 0 0 13.7 5.6L20 15.3" />
    <path d="M20 20v-4.7h-4.7" />
  </Svg>
);
const IconUsers = ({ className }) => (
  <Svg className={className} fill="currentColor" stroke="none">
    <circle cx="8" cy="8" r="3.2" />
    <circle cx="16.5" cy="8.5" r="2.8" />
    <path d="M2 19c0-3.6 2.7-6 6-6s6 2.4 6 6z" />
    <path d="M14.5 13.4c.6-.2 1.3-.4 2-.4 3 0 5.5 2 5.5 5.5v.5h-6.3c0-2.2-.4-4-1.2-5.6z" />
  </Svg>
);
const IconArchive = ({ className }) => (
  <Svg className={className} sw={1.4}>
    <rect x="3" y="14" width="18" height="7" rx="1" />
    <rect x="5" y="8" width="14" height="6" />
    <rect x="7" y="3" width="10" height="5" />
    <path d="M9 17.5h6M8 10.5l1 1 2-2M13 11h3" />
  </Svg>
);
const IconLogout = ({ className }) => (
  <Svg className={className} sw={2}>
    <path d="M10 3H4v18h6" />
    <path d="M9 12h12M17 8l4 4-4 4" />
  </Svg>
);
const IconSearch = ({ className }) => (
  <Svg className={className} sw={2}>
    <circle cx="10" cy="10" r="6.5" />
    <path d="m15 15 6 6" />
  </Svg>
);
const IconUser = ({ className }) => (
  <Svg className={className} sw={1.4}>
    <circle cx="12" cy="7.5" r="4.3" />
    <path d="M3 22c0-5 4-8 9-8s9 3 9 8z" />
  </Svg>
);
const IconUserSolid = ({ className }) => (
  <Svg className={className} fill="currentColor" stroke="none">
    <circle cx="12" cy="8" r="4.5" />
    <path d="M3 22c0-5 4-8.5 9-8.5s9 3.5 9 8.5z" />
  </Svg>
);
const IconLock = ({ className }) => (
  <Svg className={className} sw={1.4}>
    <rect x="4.5" y="10" width="15" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15" r="1.2" />
  </Svg>
);
const IconEye = ({ className }) => (
  <Svg className={className} sw={1.8}>
    <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);
const IconEyeOff = ({ className }) => (
  <Svg className={className} sw={1.8}>
    <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M3 3l18 18" />
  </Svg>
);
const IconCheck = ({ className }) => (
  <Svg className={className} sw={3.2}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);
const IconClock = ({ className }) => (
  <Svg className={className} sw={1.8}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2.5" />
  </Svg>
);
const IconCalendar = ({ className }) => (
  <Svg className={className} sw={1.6}>
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    <path d="M7.5 13h.01M12 13h.01M16.5 13h.01M7.5 16.5h.01M12 16.5h.01M16.5 16.5h.01" sw="2.4" strokeWidth="2.6" />
  </Svg>
);
const IconChevron = ({ className }) => (
  <Svg className={className} sw={1.6}>
    <path d="m3 8 9 9 9-9" />
  </Svg>
);

// ---------- Utilidades ----------
const TOTAL_ALUMNOS = 900;
const DEVUELTAS_BASE = 0; // devoluciones previas al uso del sistema
const MOVIMIENTOS_BASE = 0; // movimientos previos al uso del sistema
const PRESTAMOS_BASE = 0;
const DEVOLUCIONES_BASE = 0;

const fmtFecha = (d) => `${d.getDate()}/${d.getMonth() + 1}/${String(d.getFullYear()).slice(2)}`;
const isoHoy = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};
const isoAFecha = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return fmtFecha(new Date(y, m - 1, d));
};
const textoAFecha = (t) => {
  const [d, m, y] = t.split("/").map(Number);
  return new Date(2000 + y, m - 1, d);
};
const isoADate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const normSerie = (s) => s.trim().toUpperCase().replace(/^SN-ITR-/, "SN-");
const serieNum = (n) => `SN-${String(n).padStart(3, "0")}`;

// ---------- Datos iniciales ----------
const crearNotebooks = () => {
  const map = {};
  for (let i = 1; i <= 30; i++) map[serieNum(i)] = "Disponible";
  return map;
};

const REGISTROS_INICIALES = [];

const MOVIMIENTOS_INICIALES = [];

const ESTADOS_DEVOLUCION = ["En buen estado", "Dañada", "Necesita reparacion"];

// ---------- Piezas de UI reutilizables ----------
const inputBase =
  "w-full rounded-full border-[3px] border-[#adadad] bg-white px-5 py-2 text-[17px] text-gray-800 " +
  "placeholder-gray-400 outline-none transition focus:border-[#0047AB] disabled:text-gray-400 disabled:cursor-not-allowed";

const Campo = ({ label, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="mb-0.5 ml-1 block text-[15px] text-black">{label}</span>
    {children}
  </label>
);

const Logo = () => (
  <div className="relative flex h-[76px] w-[74px] shrink-0 flex-col items-center justify-end bg-[#1a1a1a] pb-1.5">
    <svg viewBox="0 0 40 18" className="absolute left-1 top-1.5 h-4 w-10" fill="none" stroke="#bbb" strokeWidth="1">
      <path d="M1 12c6-8 12-10 19-10" />
      <path d="M39 12C33 4 27 2 20 2" />
      <path d="M20 3l-3.5 6 3.5 6 3.5-6z" fill="#ddd" stroke="none" />
    </svg>
    <span className="text-[26px] font-extrabold leading-none tracking-tight text-white">ITR</span>
  </div>
);

const BarraTitulo = ({ icono: Icono, titulo, derecha }) => (
  <div className="flex h-[84px] shrink-0 items-center gap-5 px-3" style={{ background: GRIS_TITULO }}>
    <div className="flex h-[64px] w-[84px] items-center justify-center rounded-xl" style={{ background: GRIS_TARJETA }}>
      <Icono className="h-11 w-11 text-black" />
    </div>
    <h1 className="flex-1 text-2xl text-black">{titulo}</h1>
    {derecha}
  </div>
);

// ============================================================
// LOGIN
// ============================================================
function Login({ onLogin }) {
  const [verPass, setVerPass] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8"
      style={{
        fontFamily: FUENTE,
        backgroundImage: FACHADA_URL
          ? `url(${FACHADA_URL})`
          : "linear-gradient(180deg,#6f87ad 0%,#8ea3c0 45%,#6d8a52 70%,#4f6b3a 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      {/* cortes diagonales */}
      <div
        className="absolute left-0 top-0 h-[28%] w-[28%] bg-gradient-to-br from-black/90 to-black/30"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[26%] w-[26%] bg-gradient-to-tl from-black/90 to-black/30"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative z-10 w-full max-w-[540px]">
        <h1 className="text-center text-4xl font-extrabold text-white sm:text-5xl">Gestion de Notebooks</h1>
        <p className="mb-5 text-center text-sm text-white">Iniciá sesión para acceder al sistema.</p>

        <form onSubmit={enviar} className="rounded-[28px] bg-white px-8 pb-8 pt-5 shadow-2xl">
          <div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white"
            style={{ background: AZUL }}
          >
            <IconLaptop className="h-12 w-12" />
          </div>

          <label className="mt-3 block">
            <span className="ml-2 block font-bold text-black">Usuario</span>
            <div className="flex items-center gap-3 rounded-full border-[3px] border-[#777] px-3 py-1.5">
              <IconUser className="h-8 w-8 shrink-0 text-gray-500" />
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ingrese su usuario"
                className="w-full bg-transparent text-lg text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
          </label>

          <label className="mt-3 block">
            <span className="ml-2 block font-bold text-black">Contraseña</span>
            <div className="flex items-center gap-3 rounded-full border-[3px] border-[#777] px-3 py-1.5">
              <IconLock className="h-8 w-8 shrink-0 text-gray-500" />
              <input
                type={verPass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Ingresa tu contraseña"
                className="w-full bg-transparent text-lg text-gray-700 placeholder-gray-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setVerPass((v) => !v)}
                aria-label={verPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="text-gray-400 hover:text-gray-600"
              >
                {verPass ? <IconEye className="h-8 w-8" /> : <IconEyeOff className="h-8 w-8" />}
              </button>
            </div>
          </label>

          <div className="mt-2 text-right">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[17px] text-[#0047AB] underline">
              ¿Olvidastes tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="mx-auto mt-4 block w-[82%] rounded-full py-1.5 text-2xl text-white transition hover:brightness-110"
            style={{ background: AZUL }}
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
}

// ============================================================
// BARRA LATERAL
// ============================================================
const MENU = [
  { id: "inicio", label: "Inicio", icon: IconHome },
  { id: "prestamo", label: "Registrar prestamo", icon: IconPlus },
  { id: "devolucion", label: "Registrar devolucion", icon: IconRefresh },
  { id: "alumnos", label: "Alumnos y equipos", icon: IconUsers },
  { id: "historial", label: "Historial de Movimientos", icon: IconArchive },
];

function Sidebar({ pantalla, onNavigate, onLogout }) {
  return (
    <aside className="flex w-[232px] shrink-0 flex-col" style={{ background: AZUL }}>
      <div className="flex items-center">
        <Logo />
        <div className="flex-1 px-1 text-center text-[12.5px] font-semibold leading-tight text-white">
          <p className="mb-3">Gestion de notebooks</p>
          <p>Instituto Tecnico Renault</p>
        </div>
      </div>

      <nav className="mt-6 flex flex-col gap-5 px-2.5">
        {MENU.map(({ id, label, icon: Icono }) => {
          const activo = pantalla === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex h-[46px] items-center gap-3 rounded-lg px-3 text-left text-[15.5px] font-semibold text-white shadow transition ${
                activo ? "bg-gradient-to-r from-black to-[#7a7a7a]" : "hover:brightness-110"
              }`}
              style={activo ? undefined : { background: GRIS_BARRA }}
            >
              <Icono className="h-7 w-7 shrink-0" />
              <span className={id === "historial" ? "flex-1 text-center leading-tight" : ""}>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-2.5 pb-3 pt-10">
        <button
          onClick={onLogout}
          className="flex h-[46px] w-full items-center gap-3 rounded-lg bg-[#a3a3a3] px-3 text-left text-[15.5px] font-semibold text-white shadow transition hover:brightness-110"
        >
          <IconLogout className="h-8 w-8 shrink-0 text-black" />
          Cerrar Sesion
        </button>
      </div>
    </aside>
  );
}

// ============================================================
// PANTALLA: INICIO
// ============================================================
function Dona({ disponibles, prestadas, reparacion }) {
  const total = disponibles + prestadas + reparacion;
  const r = 57;
  const C = 2 * Math.PI * r;
  const segmentos = [
    { valor: disponibles, color: "#4a7ff7" },
    { valor: prestadas, color: "#b794f6" },
    { valor: reparacion, color: "#666666" },
  ];
  let acumulado = 0;
  return (
    <svg viewBox="0 0 200 200" className="h-[190px] w-[190px] shrink-0">
      <g transform="rotate(-90 100 100)">
        {total > 0 &&
          segmentos.map((s, i) => {
            const largo = (s.valor / total) * C;
            const offset = -acumulado;
            acumulado += largo;
            return s.valor === 0 ? null : (
              <circle
                key={i}
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="38"
                strokeDasharray={`${largo} ${C - largo}`}
                strokeDashoffset={offset}
              />
            );
          })}
      </g>
      <circle cx="100" cy="100" r="38" fill={GRIS_TARJETA} />
      <text x="100" y="98" textAnchor="middle" fontSize="24" fontWeight="800" fill="#000">
        {total}
      </text>
      <text x="100" y="118" textAnchor="middle" fontSize="14" fill="#222">
        Total
      </text>
    </svg>
  );
}

function Inicio({ notebooks, registros, movimientos, onBuscar }) {
  const [texto, setTexto] = useState("");
  const estados = Object.values(notebooks);
  const prestadas = estados.filter((e) => e === "Prestada").length;
  const reparacion = estados.filter((e) => e === "En reparacion").length;
  const disponibles = estados.filter((e) => e === "Disponible").length;
  const alumnosConEquipo = new Set(registros.filter((r) => r.estado === "Prestada").map((r) => r.legajo)).size;
  const ultimo = movimientos[0];

  const tarjetas = [
    { titulo: "Total de notebooks", valor: disponibles, nota: "Equipos disponibles en el colegio", color: AZUL, icono: <IconLaptop className="h-9 w-9 text-white" /> },
    { titulo: "Equipos prestados", valor: prestadas, nota: "Actualmente en uso", color: "#00b050", icono: <IconCheck className="h-8 w-8 text-white" /> },
    { titulo: "Alumnos con notebook", valor: alumnosConEquipo, nota: `De un total de ${TOTAL_ALUMNOS} alumnos`, color: "#5b1fd6", icono: <IconUsers className="h-9 w-9 text-black" /> },
    {
      titulo: "Ultimo movimiento",
      valor: ultimo ? ultimo.fecha : "—",
      nota: ultimo ? (ultimo.tipo === "Prestamo" ? "Prestamo registrado" : "Devolucion registrada") : "Sin movimientos",
      color: "#ff6a1a",
      icono: <IconClock className="h-9 w-9 text-black" />,
      fecha: true,
    },
  ];

  return (
    <>
      <header className="flex h-[84px] shrink-0 items-center justify-between gap-4 px-4" style={{ background: GRIS_BARRA }}>
        <div className="flex-1" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onBuscar(texto);
          }}
          className="flex w-full max-w-[320px] items-center gap-2 rounded-full bg-[#b9b9b9] px-3 py-1.5"
        >
          <IconSearch className="h-7 w-7 shrink-0 text-white" />
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Buscar..."
            className="w-full bg-transparent text-xl text-white placeholder-white outline-none"
          />
        </form>
        <div className="flex flex-1 items-center justify-end gap-2 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
            <IconUserSolid className="h-8 w-8 text-white" />
          </span>
          <span className="text-xl">Administrador</span>
          <IconChevron className="h-6 w-6" />
        </div>
      </header>

      <div className="flex-1 overflow-auto p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tarjetas.map((t) => (
            <div key={t.titulo} className="rounded-xl p-3 pb-4" style={{ background: GRIS_TARJETA }}>
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full" style={{ background: t.color }}>
                {t.icono}
              </span>
              <p className="-mt-1 text-xl text-black">{t.titulo}</p>
              <p className="ml-1 text-[42px] font-extrabold leading-tight text-black">{t.valor}</p>
              <p className="text-xs text-gray-700">{t.nota}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section className="rounded-xl p-4" style={{ background: GRIS_TARJETA }}>
            <div className="flex items-center gap-4">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#8c8a85]">
                <IconLaptop className="h-9 w-9 text-black" />
              </span>
              <h2 className="text-2xl text-black">Estados de equipos</h2>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-6">
              <Dona disponibles={disponibles} prestadas={prestadas} reparacion={reparacion} />
              <ul className="space-y-2 text-xl text-black">
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#4a7ff7]" /> Disponibles {disponibles}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#b794f6]" /> Prestados {prestadas}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#666]" /> En reparacion {reparacion}
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl p-4" style={{ background: GRIS_TARJETA }}>
            <div className="flex items-center gap-4">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#8c8a85]">
                <IconClock className="h-9 w-9 text-black" />
              </span>
              <h2 className="text-2xl text-black">Ultimos movimientos</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {movimientos.slice(0, 3).map((m) => {
                const esPrestamo = m.tipo === "Prestamo";
                return (
                  <li key={m.id} className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ background: esPrestamo ? "#8c8a85" : AZUL }}
                    >
                      <IconLaptop className={`h-7 w-7 ${esPrestamo ? "text-black" : "text-white"}`} />
                    </span>
                    <div className="flex flex-1 flex-wrap items-baseline gap-x-3 text-[16px] text-black">
                      <span className="text-lg" style={{ color: esPrestamo ? "#00b050" : AZUL }}>
                        {esPrestamo ? "Prestado" : "Devolucion"}
                      </span>
                      <span>{m.alumno}</span>
                      <span className="ml-auto">{m.serie}</span>
                      <span>{m.fecha}</span>
                    </div>
                  </li>
                );
              })}
              {movimientos.length === 0 && <li className="text-gray-700">Todavía no hay movimientos.</li>}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

// ============================================================
// PANTALLA: REGISTRAR PRÉSTAMO
// ============================================================
const FORM_PRESTAMO_VACIO = () => ({ nombre: "", apellido: "", curso: "", legajo: "", serie: "", fecha: isoHoy() });

function RegistrarPrestamo({ notebooks, onRegistrar }) {
  const [f, setF] = useState(FORM_PRESTAMO_VACIO);
  const [error, setError] = useState("");
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    if (!f.nombre.trim() || !f.apellido.trim() || !f.curso.trim() || !f.legajo.trim() || !f.serie.trim() || !f.fecha) {
      setError("Completá todos los campos antes de registrar el préstamo.");
      return;
    }
    const serie = normSerie(f.serie);
    // Se acepta cualquier número de serie. Solo se bloquea si esa misma
    // notebook ya está prestada, para que la devolución encuentre un único préstamo.
    if (notebooks[serie] === "Prestada") {
      setError(`La notebook ${serie} ya está prestada. Registrá primero su devolución.`);
      return;
    }
    const hayDisponibles = Object.values(notebooks).some((e) => e === "Disponible");
    if (!(serie in notebooks) && !hayDisponibles) {
      setError("No quedan notebooks disponibles en el colegio.");
      return;
    }
    onRegistrar({
      nombre: f.nombre.trim(),
      apellido: f.apellido.trim(),
      curso: f.curso.trim(),
      legajo: f.legajo.trim(),
      serie,
      fecha: isoAFecha(f.fecha),
    });
    setF(FORM_PRESTAMO_VACIO());
    setError("");
  };

  return (
    <>
      <BarraTitulo icono={IconLaptop} titulo="Registrar Prestamo" />
      <form onSubmit={enviar} className="flex-1 overflow-auto px-5 py-3">
        <h2 className="text-[23px] text-black">Datos del Alumno</h2>
        <div className="mt-1 grid grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-2">
          <Campo label="Nombre">
            <input className={inputBase} placeholder="Ingresar nombre" value={f.nombre} onChange={set("nombre")} />
          </Campo>
          <Campo label="Apellido">
            <input className={inputBase} placeholder="Ingresar apellido" value={f.apellido} onChange={set("apellido")} />
          </Campo>
          <Campo label="Curso">
            <input className={inputBase} placeholder="Ej:5°P" value={f.curso} onChange={set("curso")} />
          </Campo>
          <Campo label="Legajo">
            <input className={inputBase} placeholder="N° de legajo" value={f.legajo} onChange={set("legajo")} />
          </Campo>
        </div>

        <h2 className="mt-5 text-[23px] text-black">Datos de la Notebook</h2>
        <div className="mt-1 space-y-3">
          <Campo label="Numero de serie">
            <input
              className={inputBase}
              placeholder="Ingresar numero de serie del equipo"
              value={f.serie}
              onChange={set("serie")}
            />
          </Campo>
          <Campo label="Fecha del prestamo">
            <input type="date" className={inputBase} value={f.fecha} onChange={set("fecha")} />
          </Campo>
        </div>

        {error && <p className="mt-3 rounded-lg bg-red-100 px-4 py-2 text-red-700" role="alert">{error}</p>}

        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-3 border-2 border-[#8a3ffc] py-2 text-2xl text-white transition hover:brightness-110"
          style={{ background: AZUL }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <IconCheck className="h-6 w-6 text-[#00b050]" />
          </span>
          Registrar Prestamo
        </button>
      </form>
    </>
  );
}

// ============================================================
// PANTALLA: REGISTRAR DEVOLUCIÓN
// ============================================================
function RegistrarDevolucion({ registros, onDevolver }) {
  const [serieBusq, setSerieBusq] = useState("");
  const [encontrado, setEncontrado] = useState(null);
  const [fecha, setFecha] = useState(isoHoy());
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");

  const buscar = () => {
    const serie = normSerie(serieBusq);
    if (!serie) {
      setError("Ingresá un número de serie para buscar.");
      setEncontrado(null);
      return;
    }
    const reg = registros.find((r) => r.serie === serie && r.estado === "Prestada");
    if (!reg) {
      setEncontrado(null);
      setError(`No hay un préstamo activo para el número de serie ${serie}.`);
      return;
    }
    setEncontrado(reg);
    setError("");
  };

  const confirmar = () => {
    if (!encontrado) {
      setError("Primero buscá un préstamo activo por número de serie.");
      return;
    }
    if (!fecha || !estado) {
      setError("Seleccioná la fecha de devolución y el estado de la notebook.");
      return;
    }
    onDevolver({ registro: encontrado, fecha: isoAFecha(fecha), estado });
    setSerieBusq("");
    setEncontrado(null);
    setEstado("");
    setFecha(isoHoy());
    setError("");
  };

  const dis = "disabled:bg-white";
  return (
    <>
      <BarraTitulo icono={IconRefresh} titulo="Registrar devolucion" />
      <div className="flex-1 overflow-auto px-5 py-3">
        <h2 className="text-[23px] text-black">Identificacion del prestamo</h2>
        <Campo label="Numero de serie de la notebook">
          <div className="flex items-center gap-3">
            <input
              className={inputBase}
              placeholder="Ingresar numero de serie..."
              value={serieBusq}
              onChange={(e) => setSerieBusq(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), buscar())}
            />
            <button
              type="button"
              onClick={buscar}
              aria-label="Buscar préstamo"
              className="flex h-[50px] w-[58px] shrink-0 items-center justify-center rounded-lg text-white transition hover:brightness-110"
              style={{ background: AZUL }}
            >
              <IconSearch className="h-8 w-8" />
            </button>
          </div>
        </Campo>
        <p className="ml-2 mt-1 text-sm text-gray-600">Ingresa el numero de serie para buscar el prestamo activo</p>

        <h2 className="mt-3 text-[23px] text-black">Datos del alumno</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          <Campo label={<span className="text-gray-400">Nombre</span>}>
            <input disabled className={`${inputBase} ${dis}`} placeholder="Se completa al buscar" value={encontrado?.nombre ?? ""} readOnly />
          </Campo>
          <Campo label={<span className="text-gray-400">Apellido</span>}>
            <input disabled className={`${inputBase} ${dis}`} placeholder="Se completa al buscar" value={encontrado?.apellido ?? ""} readOnly />
          </Campo>
          <Campo label={<span className="text-gray-400">Curso</span>}>
            <input disabled className={`${inputBase} ${dis}`} placeholder="Automatico" value={encontrado?.curso ?? ""} readOnly />
          </Campo>
          <Campo label={<span className="text-gray-400">Legajo</span>}>
            <input disabled className={`${inputBase} ${dis}`} placeholder="Automatico" value={encontrado?.legajo ?? ""} readOnly />
          </Campo>
        </div>

        <h2 className="mt-3 text-[23px] text-black">Datos de la devolucion</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          <Campo label="Fecha de devolucion">
            <input type="date" className={inputBase} value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </Campo>
          <Campo label="Estado de la notebook">
            <select
              className={`${inputBase} ${estado ? "" : "text-gray-400"}`}
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="" disabled>
                seleccionar estado
              </option>
              {ESTADOS_DEVOLUCION.map((s) => (
                <option key={s} value={s} className="text-gray-800">
                  {s}
                </option>
              ))}
            </select>
          </Campo>
        </div>

        {error && <p className="mt-3 rounded-lg bg-red-100 px-4 py-2 text-red-700" role="alert">{error}</p>}

        <button
          type="button"
          onClick={confirmar}
          className="mt-4 flex w-full items-center justify-center gap-3 rounded py-2 text-2xl text-white transition hover:brightness-110"
          style={{ background: "#00c060" }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <IconCheck className="h-6 w-6 text-[#00b050]" />
          </span>
          Confirmar devolucion
        </button>
      </div>
    </>
  );
}

// ============================================================
// PANTALLA: ALUMNOS Y EQUIPOS
// ============================================================
function AlumnosYEquipos({ registros, busquedaInicial }) {
  const [q, setQ] = useState(busquedaInicial || "");
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => setQ(busquedaInicial || ""), [busquedaInicial]);

  const prestadas = registros.filter((r) => r.estado === "Prestada").length;
  const devueltas = DEVUELTAS_BASE + registros.filter((r) => r.estado === "Devuelta").length;

  const lista = useMemo(() => {
    const t = q.trim().toLowerCase();
    return registros.filter((r) => {
      if (filtro === "Prestadas" && r.estado !== "Prestada") return false;
      if (filtro === "Devueltas" && r.estado !== "Devuelta") return false;
      if (!t) return true;
      return [r.nombre, r.apellido, r.legajo, r.serie, `${r.apellido}, ${r.nombre}`].some((v) => v.toLowerCase().includes(t));
    });
  }, [registros, q, filtro]);

  const metricas = [
    { t: "Alumnos", v: TOTAL_ALUMNOS },
    { t: "Prestadas", v: prestadas },
    { t: "Devueltas", v: devueltas },
  ];

  return (
    <>
      <BarraTitulo icono={IconUsers} titulo="Alumnos y equipos" />
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metricas.map((m) => (
            <div key={m.t} className="rounded-2xl px-3 py-2" style={{ background: GRIS_TARJETA_2 }}>
              <p className="text-2xl text-black">{m.t}</p>
              <p className="ml-1 text-3xl font-extrabold text-black">{m.v}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-black">Registro de alumnos</h2>
        <div className="mt-2 flex items-center gap-3 rounded border-[3px] border-[#8a8a8a] bg-white px-2 py-1.5">
          <IconSearch className="h-7 w-7 shrink-0 text-gray-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nombre,legajo o numero de serie"
            className="w-full bg-transparent text-xl text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          {[
            ["Todos", "Todos los registros"],
            ["Prestadas", "Prestadas"],
            ["Devueltas", "Devueltas"],
          ].map(([id, texto]) => (
            <button
              key={id}
              onClick={() => setFiltro(id)}
              className={`rounded-lg border-[3px] px-2 py-0.5 text-lg ${
                filtro === id
                  ? "border-[#8c98ff] bg-[#4c5ff5] text-[#1a2a9e]"
                  : "border-[#a3a3a3] bg-[#b9b9b9] text-gray-600 hover:brightness-105"
              }`}
            >
              {texto}
            </button>
          ))}
        </div>

        <ul className="mt-3 space-y-3">
          {lista.map((r) => {
            const esPrestada = r.estado === "Prestada";
            return (
              <li key={r.id} className="relative rounded-xl px-2 py-1.5 text-[15px] leading-snug text-black" style={{ background: GRIS_TARJETA_2 }}>
                <p>Alumno</p>
                <p>
                  {r.apellido}, {r.nombre}
                </p>
                <p>Curso: {r.curso}</p>
                <p>Serie: {r.serie}</p>
                <span
                  className={`absolute bottom-3 right-4 rounded-full px-6 py-0.5 text-xl ${
                    esPrestada ? "bg-[#4c5ff5] text-[#dfe4ff]" : "bg-[#00c060] text-[#e9ff8a]"
                  }`}
                >
                  {esPrestada ? "Prestada" : "Devuelta"}
                </span>
              </li>
            );
          })}
          {lista.length === 0 && <li className="rounded-xl p-4 text-gray-700" style={{ background: GRIS_TARJETA_2 }}>{registros.length === 0 ? "Todavía no hay alumnos con notebook registrados." : "No hay registros que coincidan con la búsqueda."}</li>}
        </ul>
      </div>
    </>
  );
}

// ============================================================
// PANTALLA: HISTORIAL DE MOVIMIENTOS
// ============================================================
const selectFiltro = "w-full rounded-lg border-[3px] border-[#a8a8a8] bg-[#bdbdbd] px-1.5 py-2 text-sm text-black outline-none";

function Historial({ movimientos, enUso }) {
  const [draft, setDraft] = useState({ q: "", tipo: "Todos", curso: "Todos", estado: "Todos" });
  const [aplicado, setAplicado] = useState(draft);
  const [desde, setDesde] = useState(""); // formato YYYY-MM-DD (input date)
  const [hasta, setHasta] = useState("");

  const cursos = useMemo(() => ["Todos", ...Array.from(new Set(movimientos.map((m) => m.curso)))], [movimientos]);
  const estados = useMemo(() => ["Todos", ...Array.from(new Set(movimientos.map((m) => m.detalle)))], [movimientos]);

  const filas = movimientos.filter((m) => {
    const t = aplicado.q.trim().toLowerCase();
    if (aplicado.tipo !== "Todos" && m.tipo !== aplicado.tipo) return false;
    if (aplicado.curso !== "Todos" && m.curso !== aplicado.curso) return false;
    if (aplicado.estado !== "Todos" && m.detalle !== aplicado.estado) return false;
    if (t && !`${m.alumno} ${m.serie}`.toLowerCase().includes(t)) return false;
    const f = textoAFecha(m.fecha);
    if (desde && f < isoADate(desde)) return false;
    if (hasta && f > isoADate(hasta)) return false;
    return true;
  });

  const prestamos = PRESTAMOS_BASE + movimientos.filter((m) => m.tipo === "Prestamo").length;
  const devoluciones = DEVOLUCIONES_BASE + movimientos.filter((m) => m.tipo === "Devolucion").length;
  const total = MOVIMIENTOS_BASE + movimientos.length;

  const metricas = [
    { t: "Total de movimientos", v: total, n: "Prestamos y devoluciones" },
    { t: "Prestamos", v: prestamos, n: "Equipos entregados" },
    { t: "Devoluciones", v: devoluciones, n: "Equipos recibidos" },
    { t: "En uso", v: enUso, n: "Notebooks prestadas" },
  ];

  return (
    <HistorialVista
      metricas={metricas}
      draft={draft}
      setDraft={setDraft}
      aplicar={() => setAplicado(draft)}
      cursos={cursos}
      estados={estados}
      filas={filas}
      desde={desde}
      hasta={hasta}
      setDesde={setDesde}
      setHasta={setHasta}
    />
  );
}

function HistorialVista({ metricas, draft, setDraft, aplicar, cursos, estados, filas, desde, hasta, setDesde, setHasta }) {
  return (
    <>
      <BarraTitulo
        icono={IconClock}
        titulo="Historial de movimientos"
        derecha={
          <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-1.5">
            <IconCalendar className="h-10 w-10 shrink-0 text-black" />
            <div className="leading-tight">
              <p className="text-sm text-gray-400">Rango de fecha</p>
              <div className="flex items-center gap-1.5">
                <input
                  type="date"
                  aria-label="Desde"
                  value={desde}
                  max={hasta || undefined}
                  onChange={(e) => setDesde(e.target.value)}
                  className="w-[130px] cursor-pointer bg-transparent text-sm text-black outline-none"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="date"
                  aria-label="Hasta"
                  value={hasta}
                  min={desde || undefined}
                  onChange={(e) => setHasta(e.target.value)}
                  className="w-[130px] cursor-pointer bg-transparent text-sm text-black outline-none"
                />
                {(desde || hasta) && (
                  <button
                    type="button"
                    title="Quitar rango de fecha"
                    aria-label="Quitar rango de fecha"
                    onClick={() => {
                      setDesde("");
                      setHasta("");
                    }}
                    className="ml-1 rounded-full px-2 text-gray-500 hover:bg-gray-200"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        }
      />
      <div className="flex-1 overflow-auto p-3">
        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {metricas.map((m) => (
            <div key={m.t} className="rounded-2xl px-2.5 py-1.5" style={{ background: GRIS_TARJETA_2 }}>
              <p className="text-xl text-black">{m.t}</p>
              <p className="ml-1 text-3xl font-extrabold leading-tight text-black">{m.v}</p>
              <p className="text-sm text-gray-700">{m.n}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-end gap-3">
          <input
            value={draft.q}
            onChange={(e) => setDraft((d) => ({ ...d, q: e.target.value }))}
            placeholder="Buscar por nombre,legajo o numero de serie"
            className="min-w-[220px] flex-1 border-[3px] border-[#a8a8a8] bg-white px-2 py-1.5 text-gray-700 placeholder-gray-400 outline-none"
          />
          <label className="w-[140px]">
            <span className="block text-sm text-gray-600">Tipo de movimiento</span>
            <select className={selectFiltro} value={draft.tipo} onChange={(e) => setDraft((d) => ({ ...d, tipo: e.target.value }))}>
              {["Todos", "Prestamo", "Devolucion"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="w-[96px]">
            <span className="block text-sm text-gray-600">Curso</span>
            <select className={selectFiltro} value={draft.curso} onChange={(e) => setDraft((d) => ({ ...d, curso: e.target.value }))}>
              {cursos.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="w-[110px]">
            <span className="block text-sm text-gray-600">Estado</span>
            <select className={selectFiltro} value={draft.estado} onChange={(e) => setDraft((d) => ({ ...d, estado: e.target.value }))}>
              {estados.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <button
            onClick={aplicar}
            className="rounded-lg border-[3px] border-[#6b8fd1] px-4 py-2 text-lg text-white transition hover:brightness-110"
            style={{ background: AZUL }}
          >
            Filtrar
          </button>
        </div>

        <section className="mt-3 rounded-xl border-[3px] border-[#a8a8a8] bg-[#c8c8c8] p-1.5">
          <h2 className="rounded-lg border-[3px] border-[#a8a8a8] bg-[#dedede] px-2 py-1 text-2xl text-black">Movimientos registrados</h2>
          <div className="overflow-x-auto">
            <table className="mt-1 w-full min-w-[640px] border-separate border-spacing-0 text-center text-sm font-bold text-black">
              <thead>
                <tr className="text-[15px] font-normal">
                  {["Fecha", "Tipo de movimiento", "Alumno", "Curso", "Numero de serie", "Detalle/Estado"].map((h) => (
                    <th key={h} className="px-1 py-0.5 font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filas.map((m) => (
                  <tr key={m.id}>
                    {[m.fecha, m.tipo, m.alumno, m.curso, m.serie, m.detalle].map((c, i) => (
                      <td
                        key={i}
                        className={`border-2 border-black bg-[#bdbdbd] px-2 py-3 text-[15px] ${
                          i === 5 && c === "Dañada" ? "text-red-500" : ""
                        }`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
                {filas.length === 0 && (
                  <tr>
                    <td colSpan={6} className="border-2 border-black bg-[#bdbdbd] px-2 py-4 font-normal">
                      No hay movimientos que coincidan con los filtros.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

// ---------- Estilos base (hace que el archivo funcione solo) ----------
// Carga Tailwind por CDN si el proyecto no lo tiene, la fuente Open Sans y
// neutraliza el CSS por defecto de Vite (que centraba y achicaba todo).
// Si ya tenés Tailwind bien configurado, esto simplemente no molesta.
function useEstilosBase() {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    if (!document.getElementById("itr-reset")) {
      const st = document.createElement("style");
      st.id = "itr-reset";
      st.textContent = `
        html, body { margin: 0 !important; padding: 0 !important; display: block !important; place-items: initial !important; min-width: 0 !important; background: #f2f3f5; color-scheme: light; }
        #root { max-width: none !important; width: 100% !important; margin: 0 !important; padding: 0 !important; text-align: left !important; }
        #root button { border-width: 0; font-family: inherit; }
        #root input, #root select { font-family: inherit; }
        #root a { font-weight: inherit; }
      `;
      document.head.appendChild(st);
    }
    if (!document.getElementById("itr-font")) {
      const l = document.createElement("link");
      l.id = "itr-font";
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap";
      document.head.appendChild(l);
    }

    if (window.tailwind) {
      setListo(true);
      return;
    }
    let s = document.getElementById("itr-tailwind");
    if (!s) {
      s = document.createElement("script");
      s.id = "itr-tailwind";
      s.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(s);
    }
    const fin = () => setTimeout(() => setListo(true), 60);
    s.addEventListener("load", fin);
    s.addEventListener("error", () => setListo(true));
    const respaldo = setTimeout(() => setListo(true), 4000);
    return () => {
      s.removeEventListener("load", fin);
      clearTimeout(respaldo);
    };
  }, []);

  return listo;
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function Sistema() {
  const listo = useEstilosBase();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pantalla, setPantalla] = useState("inicio");
  const [notebooks, setNotebooks] = useState(crearNotebooks);
  const [registros, setRegistros] = useState(REGISTROS_INICIALES);
  const [movimientos, setMovimientos] = useState(MOVIMIENTOS_INICIALES);
  const [busqueda, setBusqueda] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const enUso = Object.values(notebooks).filter((e) => e === "Prestada").length;

  const siguienteId = (lista) => lista.reduce((mx, x) => Math.max(mx, x.id), 0) + 1;

  const registrarPrestamo = (d) => {
    setNotebooks((n) => {
      const next = { ...n };
      // Si el número de serie no estaba cargado, se toma una notebook disponible
      // del stock para que el total de disponibles siempre baje al prestar.
      if (!(d.serie in next)) {
        const libre = Object.keys(next).find((k) => next[k] === "Disponible");
        if (libre) delete next[libre];
      }
      next[d.serie] = "Prestada";
      return next;
    });
    setRegistros((r) => [
      { id: siguienteId(r), nombre: d.nombre, apellido: d.apellido, curso: d.curso, legajo: d.legajo, serie: d.serie, estado: "Prestada" },
      ...r,
    ]);
    setMovimientos((m) => [
      {
        id: siguienteId(m),
        fecha: d.fecha,
        tipo: "Prestamo",
        alumno: `${d.apellido}, ${d.nombre}`,
        curso: d.curso,
        serie: d.serie,
        detalle: "Equipo entregado",
      },
      ...m,
    ]);
    setToast(`Préstamo registrado: ${d.serie} para ${d.apellido}, ${d.nombre}.`);
  };

  const registrarDevolucion = ({ registro, fecha, estado }) => {
    const buenEstado = estado === "En buen estado";
    setNotebooks((n) => ({ ...n, [registro.serie]: buenEstado ? "Disponible" : "En reparacion" }));
    setRegistros((r) => r.map((x) => (x.id === registro.id ? { ...x, estado: "Devuelta" } : x)));
    setMovimientos((m) => [
      {
        id: siguienteId(m),
        fecha,
        tipo: "Devolucion",
        alumno: `${registro.apellido}, ${registro.nombre}`,
        curso: registro.curso,
        serie: registro.serie,
        detalle: estado,
      },
      ...m,
    ]);
    setToast(`Devolución confirmada: ${registro.serie} (${estado.toLowerCase()}).`);
  };

  const buscarDesdeInicio = (texto) => {
    setBusqueda(texto);
    setPantalla("alumnos");
  };

  const navegar = (id) => {
    if (id !== "alumnos") setBusqueda("");
    setPantalla(id);
  };

  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setPantalla("inicio");
  };

  if (!listo) return null;
  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="flex min-h-screen" style={{ fontFamily: FUENTE, background: GRIS_FONDO, color: "#111" }}>
      <Sidebar pantalla={pantalla} onNavigate={navegar} onLogout={cerrarSesion} />

      <main className="flex min-w-0 flex-1 flex-col" style={{ background: GRIS_FONDO }}>
        {pantalla === "inicio" && (
          <Inicio notebooks={notebooks} registros={registros} movimientos={movimientos} onBuscar={buscarDesdeInicio} />
        )}
        {pantalla === "prestamo" && <RegistrarPrestamo notebooks={notebooks} onRegistrar={registrarPrestamo} />}
        {pantalla === "devolucion" && <RegistrarDevolucion registros={registros} onDevolver={registrarDevolucion} />}
        {pantalla === "alumnos" && <AlumnosYEquipos registros={registros} busquedaInicial={busqueda} />}
        {pantalla === "historial" && <Historial movimientos={movimientos} enUso={enUso} />}
      </main>

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 max-w-sm rounded-xl bg-[#00a050] px-5 py-3 text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}