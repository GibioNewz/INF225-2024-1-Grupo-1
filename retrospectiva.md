# Retrospectiva

## Riesgo 1

**Riesgo identificado:** Dependencia de APIs.  
**Objetivo afectado:** Cálculo de valor UF.  
**Impacto:** Alto.  
**Probabilidad de ocurrencia:** Bajo.  
**Medida de mitigación:** Debemos tener un handler para hacer consultas a otra API en caso que se caiga la que se esté utilizando.  
**Estado del riesgo:** Activo y no mitigado.

## Riesgo 2

**Riesgo identificado:** Caída del servicio de notificación por Email.  
**Objetivo afectado:** Emailing a supervisores de venta.  
**Impacto:** Medio.  
**Probabilidad de ocurrencia:** Alto.  
**Medida de mitigación:** Debemos tener una herramienta que detecte la caída del servicio de e-mail.  
**Estado del riesgo:** Activo y no mitigado.

## Riesgo 3

**Riesgo identificado:** Caída de la página web debido a múltiples instancias.
**Objetivo afectado:** Funcionalidad del sistema.
**Impacto:** Alto.
**Probabilidad de ocurrencia:** Bajo.
**Medida de mitigación:** Debemos manejar la caducidad de sessiones y el máximo de usuarios en simultáneo.
**Estado del riesgo:** Activo y no mitigado.