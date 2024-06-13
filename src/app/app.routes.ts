import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdministradorComponent } from './admin/administrador/administrador.component';
import { MaestroComponent } from './admin/maestro/maestro.component';
import { MateriaComponent } from './admin/materia/materia.component';
import { ModuloComponent } from './admin/modulo/modulo.component';
import { AsistenciaComponent } from './admin/asistencia/asistencia.component';
import { AulaComponent } from './admin/aula/aula.component';
import { CargahorariaComponent } from './admin/cargahoraria/cargahoraria.component';
import { GestionComponent } from './admin/gestion/gestion.component';
import { GrupoComponent } from './admin/grupo/grupo.component';
import { LicenciaComponent } from './admin/licencia/licencia.component';
import { NivelComponent } from './admin/nivel/nivel.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { CrearComponent } from './admin/materia/crear/crear.component';
import { EditarComponent } from './admin/materia/editar/editar.component';
import { ListaComponent } from './admin/materia/lista/lista.component';
import { FacultadComponent } from './admin/facultad/facultad.component';
import { ListafComponent } from './admin/facultad/listaf/listaf.component';
import { CrearfComponent } from './admin/facultad/crearf/crearf.component';
import { EditarfComponent } from './admin/facultad/editarf/editarf.component';
import { CrearGesComponent } from './admin/gestion/crear-ges/crear-ges.component';
import { ListaGesComponent } from './admin/gestion/lista-ges/lista-ges.component';
import { EditarGesComponent } from './admin/gestion/editar-ges/editar-ges.component';
import { ListagComponent } from './admin/grupo/listag/listag.component';
import { CreargComponent } from './admin/grupo/crearg/crearg.component';
import { EditargComponent } from './admin/grupo/editarg/editarg.component';
import { ListaUComponent } from './admin/usuario/lista-u/lista-u.component';
import { CrearUComponent } from './admin/usuario/crear-u/crear-u.component';
import { EditarUComponent } from './admin/usuario/editar-u/editar-u.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path: 'dashboard',
                title: 'Dashboard',
                component: DashboardComponent,
                /* data: { icon: 'fa-solid fa-gauge' } */
              },
              {
                path: 'usuario',
                title: 'usuario',
                component: UsuarioComponent,
                children:[
                  {
                    path: '',
                        component: ListaUComponent
                  },
                  {
                    path: 'crear',
                        component: CrearUComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarUComponent
                  }
                ]
              },
              {
                path: 'administrador',
                title: 'Administrador',
                component: AdministradorComponent,
                data: { icon: 'fa-solid fa-user' }
              },
              {
                path: 'maestro',
                title: 'Maestro',
                component: MaestroComponent,
                data: { icon: 'fa-solid fa-chalkboard-teacher' }
              },
              {
                path: 'materia',
                title: 'Materia',
                component: MateriaComponent,
                children:[
                  {
                    path: '',
                        component: ListaComponent
                  },
                  {
                    path: 'crear',
                        component: CrearComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarComponent
                  }
                ]
              },
              {
                path: 'modulo',
                title: 'Modulo',
                component: ModuloComponent,
                data: { icon: 'fa-solid fa-cubes' }
              },
              {
                path: 'facultad',
                title: 'Facultad',
                component: FacultadComponent,
                children:[
                  {
                    path: '',
                        component: ListafComponent
                  },
                  {
                    path: 'crear',
                        component: CrearfComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarfComponent
                  }
                ]
              },
              {
                path: 'asistencia',
                title: 'Asistencia',
                component: AsistenciaComponent,
                data: { icon: 'fa-solid fa-calendar-check' }
              },
              {
                path: 'aula',
                title: 'Aula',
                component: AulaComponent,
                data: { icon: 'fa-solid fa-door-open' }
              },
              {
                path: 'carga-horaria',
                title: 'Carga Horaria',
                component: CargahorariaComponent,
                data: { icon: 'fa-solid fa-clock' }
              },
              {
                path: 'gestion',
                title: 'Gestion',
                component: GestionComponent,
                children:[
                  {
                    path: '',
                        component: ListaGesComponent
                  },
                  {
                    path: 'crear',
                        component: CrearGesComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarGesComponent
                  }
                ]
              },
              {
                path: 'grupo',
                title: 'Grupo',
                component: GrupoComponent,
                children:[
                  {
                    path: '',
                        component: ListagComponent
                  },
                  {
                    path: 'crear',
                        component: CreargComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditargComponent
                  }
                ]
              },
              {
                path: 'licencia',
                title: 'Licencia',
                component: LicenciaComponent,
                data: { icon: 'fa-solid fa-id-card' }
              },
              {
                path: 'nivel',
                title: 'Nivel',
                component: NivelComponent,
                data: { icon: 'fa-solid fa-layer-group' }
              },
        ]
    },
];
