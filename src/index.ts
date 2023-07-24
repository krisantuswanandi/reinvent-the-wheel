type Attributes = Record<string, string>
type VElement = {
    tagName: string;
    attributes: Attributes;
    children: (VElement)[];
} | string

function createElement(tagName = "", attributes: Attributes = {}, children: VElement[] = []) {
    return {
        tagName,
        attributes,
        children,
    } as VElement
}

function createRoot(rootNode: HTMLElement) {
    return {
        render(app: VElement) {
            const appDOM = renderDOM(app)
            rootNode.append(appDOM)
        }
    }
}

function renderDOM(app: VElement) {
    if (typeof app === "string") {
        return document.createTextNode(app)
    }

    const element = document.createElement(app.tagName)

    Object.keys(app.attributes).forEach(key => {
        element.setAttribute(key, app.attributes[key])
    })
    
    app.children.forEach(child => {
        const childElement = renderDOM(child)
        element.append(childElement)
    })

    return element
}

const app = createElement(
    "div",
    { style: "color: red; font-family: sans-serif" },
    [
        createElement("div", { style: "margin-bottom: 8px" }, ["Hello Vdom KW!!!"]),
        createElement("img", { src: "https://cataas.com/cat", width: "200px" }),
    ],
)

const rootEl = document.getElementById("app")

if (rootEl) {
    const root = createRoot(rootEl)
    root.render(app)
}
