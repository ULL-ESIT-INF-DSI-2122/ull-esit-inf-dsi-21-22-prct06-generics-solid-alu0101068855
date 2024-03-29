/**
 * Interfaz Collectable
 */
export interface Collectable<T> {
  /**
   * Método addItem
   * @param newItem añade un nuevo item 
   */
  addItem(newItem: T): void;
  /**
   * Método getItems
   * @param searchTerm busca el término a devolver 
   */
  getItems(searchTerm: string): T[];
  /**
   * Método removeItems
   * @param searchTerm  busca la posición a eliminar
   */
  removeItem(searchTerm: number): void;
  /**
   * Método getNumberOfItems devuelve el número de items que hay
   */
  getNumberOfItems(): number;
}
/**
 * Interfaz Printable
 */
export interface Printable<T> {
  print(): void;
}
/**
 * Clase abstracta PrintableCollection
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {
  }
/**
 * Método addItem
 * @param newItem añade un nuevo objeto 
 */
  addItem(newItem: T) {
    this.items.push(newItem);
  }
  /**
   * Método getItems()
   * @param searchTerm busca término
   */
  abstract getItems(searchTerm: string): T[];
  /**
   * Método removeItem()
   * @param searchTerm busca item a eliminar
   */
  removeItem(searchTerm: number){
    this.items.splice(searchTerm, 1);
  }
  /**
   * getNumberOfItems()
   * @returns numero de elementos de la lista
   */
  getNumberOfItems() {
    return this.items.length;
  }
  /**
   * print() Imprime los elementos Figure
   */
  print(){
    this.items.forEach((item) => {
      console.log(`${item}, `);
    });
  }
}
/**
 * Clase abstracta NumericPrintableCollection
 */
export abstract class NumericPrintableCollection<T extends PrintableCollection<T>> {
  constructor(protected figures: T[]) {}
  /**
   * Imprime colección de numeric
   */
  print(){
    this.figures.forEach((figure) => {
      console.log(`[${figure}], `);
    });
  }
}
/**
 * Clase CollectionN
 */
export class CollectionN extends NumericPrintableCollection<any> {
  constructor(private items: number[]) {
    super(items);
  }
}
/**
 * Clase StringPrintableCollection
 */
export class StringPrintableCollection extends PrintableCollection<any> {
  constructor(protected items: string[]) {
    super(items);
  }
  /**
   * Metodo getItems()
   * @param searchTerm bucar item 
   * @returns el item como array
   */
  getItems(searchTerm: string): string[]{
    return [searchTerm];
  };
  /**
   * Metodo print()
   * @returns cadenas concatenadas
   */
  print(){
    let aux1: string = '';
    let aux: string[] =[];
    this.items.forEach((item) => {
      aux1 = aux1 + item;
    });
    aux.push(aux1);
    return aux;
  }
}

export const myFigureCollectionN = new CollectionN([1,2,3]);
export const myStringCollection = new StringPrintableCollection(['a', 'b', 'c']);
// myFigureCollection.print();
// console.log(myStringCollection.print());
