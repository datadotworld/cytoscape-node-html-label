declare type IHAlign = "left" | "center" | "right";
declare type IVAlign = "top" | "center" | "bottom";
declare var module: any;
declare var define: any;
declare var cytoscape: any;
interface CytoscapeNodeHtmlParams {
    query?: string;
    halign?: IHAlign;
    valign?: IVAlign;
    halignBox?: IHAlign;
    valignBox?: IVAlign;
    cssClass?: string | string[];
    tpl?: (d: any) => string;
    clickHandler?: (event: Event) => void;
    hoverHandler?: (event: Event) => void;
    exitHandler?: (event: Event) => void;
}
