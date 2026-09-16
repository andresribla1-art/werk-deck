"use client";
import { useState, useEffect } from "react";

type Language = "es" | "en" | "fr" | "de" | "ja";

type TranslationKeys = {
  onboardingTitle: string;
  onboardingSub: string;
  devTitle: string;
  devDesc: string;
  companyTitle: string;
  companyDesc: string;
  connecting: string;
  redirecting: string;
  minFloor: string;
  baseSalary: string;
  activeBids: string;
  setRate: string;
  decrypt: string;
  ignore: string;
};

const translations: Record<Language, TranslationKeys> = {
  es: {
    onboardingTitle: "Sincroniza tu Identidad",
    onboardingSub: "Selecciona tu nodo de acceso. El sistema adaptará la física del entorno según tu objetivo en la red.",
    devTitle: "Developer",
    devDesc: "Demuestra ejecución con código puro, compite en Arenas y fija tu piso salarial protegido.",
    companyTitle: "Company",
    companyDesc: "Lanza desafíos de código, audita ejecución técnica real y puja por talento calificado.",
    connecting: "ESTABLECIENDO ENLACE CRIPTOGRÁFICO...",
    redirecting: "INGRESANDO AL FEED...",
    minFloor: "UMBRAL MÍNIMO CONFIGURADO",
    baseSalary: "BASE ANUAL MÍNIMA",
    activeBids: "Pujas Activas",
    setRate: "FIJAR VALOR EN RED",
    decrypt: "DESENCRIPTAR",
    ignore: "IGNORAR"
  },
  en: {
    onboardingTitle: "Synchronize Your Identity",
    onboardingSub: "Select your access node. The system will adapt environment physics based on your network objective.",
    devTitle: "Developer",
    devDesc: "Prove execution with pure code, compete in Arenas, and lock your protected salary floor.",
    companyTitle: "Company",
    companyDesc: "Launch code challenges, audit real technical execution, and bid on verified talent.",
    connecting: "ESTABLISHING CRYPTOGRAPHIC LINK...",
    redirecting: "ENTERING FEED...",
    minFloor: "MINIMUM FLOOR CONFIGURED",
    baseSalary: "MINIMUM ANNUAL BASE",
    activeBids: "Active Bids",
    setRate: "SET NETWORK FLOOR",
    decrypt: "DECRYPT",
    ignore: "IGNORE"
  },
  fr: {
    onboardingTitle: "Synchronisez Votre Identité",
    onboardingSub: "Sélectionnez votre nœud d'accès. Le système adaptera l'environnement selon votre objectif.",
    devTitle: "Développeur",
    devDesc: "Prouvez l'exécution avec du code pur, affrontez-vous dans les Arènes et verrouillez votre salaire.",
    companyTitle: "Entreprise",
    companyDesc: "Lancez des défis de code, auditez l'exécution technique et misez sur des talents vérifiés.",
    connecting: "ÉTABLISSEMENT DU LIEN CRYPTOGRAPHIQUE...",
    redirecting: "ENTRÉE DANS LE FLUX...",
    minFloor: "SEUIL MINIMUM CONFIGURÉ",
    baseSalary: "BASE ANNUELLE MINIMALE",
    activeBids: "Offres Actives",
    setRate: "FIXER LE SEUIL RÉSEAU",
    decrypt: "DÉCRYPTAGE",
    ignore: "IGNORER"
  },
  de: {
    onboardingTitle: "Synchronisieren Sie Ihre Identität",
    onboardingSub: "Wählen Sie Ihren Zugangsknoten. Das System passt die Umgebung basierend auf Ihrem Ziel an.",
    devTitle: "Entwickler",
    devDesc: "Beweisen Sie die Ausführung mit reinem Code und sichern Sie Ihr Gehalt.",
    companyTitle: "Unternehmen",
    companyDesc: "Starten Sie Code-Herausforderungen und bieten Sie auf verifizierte Talente.",
    connecting: "KRYPTOGRAPHISCHE VERBINDUNG WIRD HERGESTELLT...",
    redirecting: "EINGANG IN DEN FEED...",
    minFloor: "MINIMALER SCHWELLENWERT KONFIGURIERT",
    baseSalary: "JÄHRLICHE MINDESTBASIS",
    activeBids: "Aktive Gebote",
    setRate: "NETZWERKSCHWELLENWERT FESTLEGEN",
    decrypt: "ENTSCHLÜSSELN",
    ignore: "IGNORIEREN"
  },
  ja: {
    onboardingTitle: "アイデンティティを同期する",
    onboardingSub: "アクセスノードを選択します。システムは目的 premium に合わせて環境を適応させます。",
    devTitle: "デベロッパー",
    devDesc: "純粋なコードで実行を証明し、アリーナで競い合い、希望最低給与を保護します。",
    companyTitle: "企業",
    companyDesc: "コードチャレンジを公開し、技術的な実行を監査して検証された人材に入札します。",
    connecting: "暗号化リンクを確立中...",
    redirecting: "フィードに移動中...",
    minFloor: "設定された最低しきい値",
    baseSalary: "最低年額ベース",
    activeBids: "アクティブな入札",
    setRate: "ネットワーク値を設定",
    decrypt: "復号化",
    ignore: "無視"
  }
};

export function useSystemLanguage() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sysLang = navigator.language.split("-")[0] as Language;
      if (translations[sysLang]) {
        setLang(sysLang);
      } else {
        setLang("en");
      }
    }
  }, []);

  return { lang, t: translations[lang] || translations.en };
}