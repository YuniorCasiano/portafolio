import sanoviaImg from '../assets/sanovia.png'
import modexImg from '../assets/modex.png'

export const projects = [
  {
    id: 'sanovia',
    image: sanoviaImg,
    service: 'SANOVIA-SERVICE',
    name: 'Sanovia',
    tagline: 'Sistema de gestión médica con arquitectura de microservicios',
    description:
      'Permite administrar todo el flujo de una clínica desde un solo lugar: agendar y gestionar citas, llevar historiales médicos y expedientes de pacientes, controlar personal, generar facturación y enviar notificaciones automáticas. Cada tipo de usuario (administrador, doctor, enfermera, paciente o recepcionista) ve solo lo que le corresponde.',
    stack: ['Java 21', 'Spring Boot 3.3', 'Kafka', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'Tailwind'],
    status: 'UP',
    instance: '19 contenedores · registrados en Eureka',
    links: [{ label: 'GitHub', href: 'https://github.com/YuniorCasiano/Sanovia' }],
    readme: {
      overview:
        'Sistema de gestión de citas y expedientes médicos para clínicas, construido como un conjunto de microservicios en Spring Boot con un frontend en React/TypeScript. Arquitectura orientada a eventos (Kafka), descubrimiento de servicios (Eureka), configuración centralizada (Config Server) y API Gateway como único punto de entrada.',
      sections: [
        {
          heading: 'Principios de arquitectura',
          type: 'list',
          items: [
            'Database per service: cada microservicio tiene su propia base de datos; nunca se accede directo a la de otro servicio.',
            'Comunicación síncrona (Feign/HTTP) para consultas que necesitan respuesta inmediata.',
            'Comunicación asíncrona (Kafka) para reacciones a hechos que ya ocurrieron.',
            'API Gateway como único punto de entrada — el frontend nunca le habla directo a un microservicio.',
            'Autenticación por cookies HttpOnly con JWT: el Gateway valida el token y agrega los headers X-User-Id / X-User-Role.',
          ],
        },
        {
          heading: 'Stack tecnológico',
          type: 'table',
          headers: ['Capa', 'Tecnologías'],
          rows: [
            ['Backend', 'Java 21, Spring Boot 3, Spring Cloud (Gateway/Eureka/Config), Spring Data JPA, Spring Security, Spring Kafka, OpenFeign'],
            ['Frontend', 'React 18, TypeScript, Vite, React Router, TailwindCSS, Axios, Zustand, Recharts'],
            ['Infraestructura', 'Docker + Docker Compose, Apache Kafka + Zookeeper, Prometheus + Grafana, Zipkin'],
          ],
        },
        {
          heading: 'Servicios y puertos',
          type: 'table',
          headers: ['Servicio', 'Puerto', 'Responsabilidad'],
          rows: [
            ['api-gateway', '8080', 'Único punto de entrada, valida JWT y enruta'],
            ['eureka-server', '8761', 'Registro y descubrimiento de servicios'],
            ['auth-service', '8081', 'Registro, login, JWT, cuenta admin inicial'],
            ['patient-service', '8082', 'Perfil de pacientes, documentos adjuntos'],
            ['staff-service', '8083', 'Perfil de personal, horarios y disponibilidad'],
            ['appointment-service', '8084', 'Citas: crear, cancelar, reprogramar, recordatorios'],
            ['medical-records-service', '8085', 'Historial clínico, diagnósticos, medicamentos'],
            ['notification-service', '8086', 'Envío de correos y su registro'],
            ['billing-service', '8087', 'Facturas y pagos (simulado)'],
            ['report-service', '8088', 'Estadísticas de citas e ingresos'],
          ],
        },
        {
          heading: 'Roles y permisos',
          type: 'table',
          headers: ['Rol', 'Qué puede hacer'],
          rows: [
            ['ADMIN', 'Crear personal, ver reportes, cancelar/reprogramar cualquier cita, eliminar pacientes'],
            ['DOCTOR', 'Ver su agenda, completar consultas, marcar no-show, configurar horario recurrente'],
            ['NURSE', 'Ver pacientes, crear registros médicos y alergias'],
            ['RECEPTIONIST', 'Crear citas de cualquier paciente, cobrar facturas en ventanilla'],
            ['PATIENT', 'Agendar/cancelar sus citas, ver historial y facturas, pagar en línea'],
          ],
        },
        {
          heading: 'Arquitectura de eventos (Kafka)',
          type: 'list',
          items: [
            'appointment.created → reserva el slot y envía correo de confirmación',
            'appointment.cancelled → libera el slot y notifica la cancelación',
            'appointment.completed → genera la factura automáticamente',
            'appointment.rescheduled → libera/reserva slots y notifica el cambio',
            'invoice.generated / payment.received → notificaciones y contadores para reportes',
          ],
        },
        {
          heading: 'Observabilidad',
          type: 'list',
          items: ['Zipkin — trazas distribuidas entre microservicios', 'Prometheus — métricas expuestas por cada servicio', 'Grafana — dashboards provisionados automáticamente'],
        },
        {
          heading: 'Cómo levantar el proyecto',
          type: 'text',
          content: 'Requiere Docker Desktop (con WSL2 en Windows) con 4-6 GB de RAM asignados. Se clona el repo, se copia el .env de ejemplo y se levanta todo con un solo docker compose up --build.',
        },
      ],
    },
  },
  {
    id: 'modex-micro',
    image: modexImg,
    service: 'MODEX-MICRO-SERVICE',
    name: 'Modex Plus · Microservicios',
    tagline: 'Versión original — 6 microservicios en Spring Boot',
    description:
      'Tienda en línea de moda talla plus donde los usuarios navegan el catálogo de productos, arman su carrito, aplican cupones de descuento y completan la compra. Esta versión distribuye cada función de la tienda (catálogo, pedidos, pagos, etc.) en servicios independientes para que puedan escalar por separado.',
    stack: ['Spring Boot', 'Java 21', 'Kafka', 'Redis', 'API Gateway', 'MongoDB'],
    status: 'UP',
    instance: '6 microservicios · patrón Saga',
    links: [{ label: 'GitHub', href: 'https://github.com/YuniorCasiano/modex' }],
    readme: {
      overview:
        'Plataforma de e-commerce de ropa plus size construida con arquitectura de microservicios: cada dominio de negocio es un servicio Spring Boot independiente, con su propia base de datos y comunicación asíncrona vía Apache Kafka.',
      sections: [
        {
          heading: 'Stack tecnológico',
          type: 'table',
          headers: ['Capa', 'Tecnología'],
          rows: [
            ['Lenguaje', 'Java 21'],
            ['Framework', 'Spring Boot 3.2.5'],
            ['Mensajería', 'Apache Kafka'],
            ['Bases de datos', 'MongoDB 7.0, PostgreSQL 16'],
            ['Caché', 'Redis'],
            ['API Gateway', 'Spring Cloud Gateway'],
            ['Seguridad', 'Spring Security + JWT'],
            ['Observabilidad', 'Prometheus + Grafana + Zipkin'],
          ],
        },
        {
          heading: 'Servicios',
          type: 'table',
          headers: ['Servicio', 'Puerto', 'Base de datos', 'Responsabilidad'],
          rows: [
            ['API Gateway', '8080', '—', 'Enruta cada petición al microservicio correspondiente'],
            ['Auth Service', '8082', 'MongoDB (auth_db)', 'Registro, login, refresh token, logout'],
            ['User Service', '8081', 'MongoDB (users_db)', 'Perfil de usuario'],
            ['Product Service', '8084', 'MongoDB (products_db)', 'Catálogo con caché Redis'],
            ['Order Service', '8083', 'PostgreSQL (ropa_store)', 'Gestión de pedidos, dispara la Saga'],
            ['Inventory Service', '8085', 'PostgreSQL (ropa_store)', 'Stock por producto y talla'],
          ],
        },
        {
          heading: 'Patrón Saga con Kafka',
          type: 'text',
          content:
            'Order Service publica OrderCreatedEvent al crear un pedido; Inventory Service verifica el stock y responde con StockReservedEvent (el pedido pasa a CONFIRMED) o StockFailedEvent (el pedido pasa a CANCELLED). Topics: order-created, stock-reserved, stock-failed.',
        },
        {
          heading: 'Diferencias frente al monolito',
          type: 'table',
          headers: ['Aspecto', 'Microservicios', 'Monolito'],
          rows: [
            ['Comunicación Order→Inventory', 'Kafka (asíncrono)', 'Llamada directa a método Java'],
            ['Caché de productos', 'Redis', 'ConcurrentMapCacheManager en memoria'],
            ['Bases MongoDB', '3 bases separadas', '1 sola base con varias colecciones'],
            ['Infraestructura', 'Docker Compose con 10+ contenedores', '1 sola app Java'],
          ],
        },
        {
          heading: 'Observabilidad',
          type: 'list',
          items: ['Prometheus (9090) — métricas de todos los servicios', 'Grafana (3000) — dashboards en tiempo real', 'Zipkin (9411) — trazabilidad distribuida'],
        },
        {
          heading: 'Cómo ejecutar',
          type: 'text',
          content: 'Requiere Docker Desktop, Java 21 y Maven 3.9+. Se clona el repo y se levanta todo con docker compose up -d.',
        },
      ],
    },
  },
  {
    id: 'modex-mono',
    image: modexImg,
    service: 'MODEX-MONO-SERVICE',
    name: 'Modex Plus · Monolito',
    tagline: 'Versión migrada — en producción',
    description:
      'La misma tienda de moda talla plus — catálogo, carrito, cupones y checkout con validación de tarjeta — pero reempaquetada como una sola aplicación desplegable, para poder tenerla corriendo en producción sin pagar por infraestructura de servidores múltiples.',
    stack: ['Spring Boot', 'Java 21', 'React', 'Vite', 'MongoDB Atlas', 'PostgreSQL', 'Render', 'Vercel'],
    status: 'UP',
    instance: 'en producción · modex-plus.vercel.app',
    links: [
      { label: 'GitHub', href: 'https://github.com/YuniorCasiano/modex-plus' },
      { label: 'Demo', href: 'https://modex-plus.vercel.app' },
    ],
    readme: {
      overview:
        'Modex Plus reempaquetado como monolito Spring Boot: fusiona los 6 microservicios originales (Auth, User, Product, Order, Inventory, API Gateway) en una sola aplicación, eliminando Kafka, Redis y múltiples bases de datos para poder desplegarse gratis. En producción con frontend en Vercel y backend en Render.',
      sections: [
        {
          heading: 'Diferencias clave frente a la versión de microservicios',
          type: 'table',
          headers: ['Aspecto', 'Microservicios', 'Monolito'],
          rows: [
            ['Comunicación Order→Inventory', 'Kafka (asíncrono)', 'Llamada directa a método Java (síncrono)'],
            ['Caché de productos', 'Redis', 'ConcurrentMapCacheManager (en memoria)'],
            ['Bases MongoDB', '3 bases separadas', '1 sola base (modex_db) con varias colecciones'],
            ['Puerto', 'Gateway 8080 + servicios 8081-8085', 'Todo en un solo puerto'],
            ['Infraestructura', 'Docker Compose con 10+ contenedores', '1 sola app Java'],
          ],
        },
        {
          heading: 'Stack tecnológico',
          type: 'table',
          headers: ['Capa', 'Tecnología'],
          rows: [
            ['Backend', 'Java 21, Spring Boot 3.2.5, Spring Security, Spring Data MongoDB + JPA, JJWT'],
            ['Frontend', 'React 18, Vite 5, Recharts'],
            ['Infraestructura', 'Render (backend), MongoDB Atlas M0, Render PostgreSQL, Vercel (frontend)'],
          ],
        },
        {
          heading: 'Funcionalidades del frontend',
          type: 'list',
          items: [
            'Catálogo con filtros por categoría, ocasión, precio, talla y búsqueda',
            'Carrito persistido con panel lateral deslizante',
            'Checkout en 3 pasos con validación de tarjeta (Luhn)',
            'Cupones de descuento (MODEX10, PLUS20, BIENVENIDA)',
            'Lista de favoritos persistida en localStorage',
            'Panel admin con CRUD de productos, gestión de pedidos y estadísticas (Recharts)',
            'Modo oscuro/claro',
          ],
        },
        {
          heading: 'Despliegue en producción',
          type: 'text',
          content:
            'Backend en Render (Docker), MongoDB Atlas M0 y PostgreSQL de Render para los datos, frontend en Vercel. El backend gratuito de Render "duerme" tras 15 minutos de inactividad — la primera petición después tarda 30-60 segundos (cold start).',
        },
        {
          heading: 'Cómo ejecutar localmente',
          type: 'text',
          content: 'Requiere Java 21, Maven 3.9+, Docker Desktop y Node 18+. Se levanta MongoDB/PostgreSQL con docker-compose up -d, el backend con mvn spring-boot:run y el frontend con npm run dev.',
        },
      ],
    },
  },
]
