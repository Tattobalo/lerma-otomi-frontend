//No se usa

import { useState, useEffect } from 'react';
import api from '../api/axios';

export const useDetalleVocabulario = (id) => {
    const [palabraBase, setPalabraBase] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarDetalle = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const { data } = await api.get(`vocabulario/${id}/`);
                setPalabraBase(data);
            } catch (error) {
                console.error("Error al cargar el detalle del vocabulario:", error);
            } finally {
                setLoading(false);
            }
        };
        cargarDetalle();
    }, [id]);

    // Si aún está cargando o no hay datos, retornamos el loading
    if (!palabraBase) return { p: null, loading };

    // 1. Identificar inteligentemente cuál registro es Otomí y cuál es Español
    const esOtomi = (obj) => obj?.idioma_nombre?.toLowerCase().includes('otom');
    
    const palabraOtomi = esOtomi(palabraBase) ? palabraBase : palabraBase.traducciones?.find(esOtomi);
    const palabraEspanol = !esOtomi(palabraBase) ? palabraBase : palabraBase.traducciones?.find(t => !esOtomi(t));

    // 2. Construir un objeto procesado con los datos finales en cascada (Otomí || Español)
    const datosProcesados = {
        ...palabraBase, // Mantenemos ID, término original, traducciones, etc.
        ejemploFinal: palabraOtomi?.ejemplo || palabraEspanol?.ejemplo,
        imagenFinal: palabraOtomi?.imagen || palabraEspanol?.imagen,
        audioFinal: palabraOtomi?.audio || palabraEspanol?.audio,
        foneticaFinal: palabraOtomi?.fonetica || palabraEspanol?.fonetica || palabraBase.termino,
        gramaticaFinal: palabraOtomi?.categoria_gramatical_nombre || palabraEspanol?.categoria_gramatical_nombre || 'Sin categoría',
        temaFinal: palabraOtomi?.tema_nombre || palabraEspanol?.tema_nombre || 'General'
    };

    return { p: datosProcesados, loading };
};