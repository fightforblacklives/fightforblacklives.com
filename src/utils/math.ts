export const relativeRect = (relative: DOMRect, child: DOMRect) => {
  return {
    top: child.top - relative.top,
    left: child.left - relative.left,
    width: child.width,
    height: child.height,
  };
};

export const padRect = (rect: DOMRect, padX: number, padY: number) => {
  return {
    top: rect.top - padY,
    left: rect.left - padX,
    width: rect.width + padX * 2,
    height: rect.height + padY * 2,
  };
};
