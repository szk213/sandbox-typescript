export class Sample {
  constructor(public id: number, public name: string) {
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }
}
