import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective {

  roles: Readonly<string[]> = [
    'administracao',
    'atendimento',
    'comercial',
    'financeiro',
    'galpao',
    'marketing',
    'operacao',
    'projetos',
    'relatorios',
    'seguranca-informacao',
    'sustentacao'
  ];

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set hasRole(role: string) {
    const hasRole = true;
    if (hasRole)
      this.viewContainer.createEmbeddedView(this.templateRef);
    else
      this.viewContainer.clear();
  }
}
