export const MUI = "mui-design"
export const MUI_MODEL = {
  type: "dark",
}

export function getMui() {
  const mui = localStorage.getItem(MUI)
  if (mui == null) {
    return MUI_MODEL
  }
  return mui
}

export function setMui(mui) {
  localStorage.setItem(MUI, mui)
}
