export const generateReport = async (zaproxy) => zaproxy.core.htmlreport();

// url: any specific URL that has been recorded in a scan
export const generateAlerts = async (zaproxy, url) => zaproxy.core.alerts(url);
