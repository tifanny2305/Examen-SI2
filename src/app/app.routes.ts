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
import { CarreraComponent } from './admin/carrera/carrera.component';
import { ListacComponent } from './admin/carrera/listac/listac.component';
import { CrearcComponent } from './admin/carrera/crearc/crearc.component';
import { EditarcComponent } from './admin/carrera/editarc/editarc.component';
import { ListaAComponent } from './admin/administrador/lista-a/lista-a.component';
import { CrearAComponent } from './admin/administrador/crear-a/crear-a.component';
import { EditarAComponent } from './admin/administrador/editar-a/editar-a.component';
import { ListaMaComponent } from './admin/maestro/lista-ma/lista-ma.component';
import { CrearMaComponent } from './admin/maestro/crear-ma/crear-ma.component';
import { EditarMaComponent } from './admin/maestro/editar-ma/editar-ma.component';
import { ListaModComponent } from './admin/modulo/lista-mod/lista-mod.component';
import { CrearModComponent } from './admin/modulo/crear-mod/crear-mod.component';
import { EditarModComponent } from './admin/modulo/editar-mod/editar-mod.component';
import { ListaAsisComponent } from './admin/asistencia/lista-asis/lista-asis.component';
import { CrearAsisComponent } from './admin/asistencia/crear-asis/crear-asis.component';
import { EditarAsisComponent } from './admin/asistencia/editar-asis/editar-asis.component';
import { ListaAulComponent } from './admin/aula/lista-aul/lista-aul.component';
import { CrearAulComponent } from './admin/aula/crear-aul/crear-aul.component';
import { EditarAulComponent } from './admin/aula/editar-aul/editar-aul.component';
import { ListaChComponent } from './admin/cargahoraria/lista-ch/lista-ch.component';
import { CrearChComponent } from './admin/cargahoraria/crear-ch/crear-ch.component';
import { EditarChComponent } from './admin/cargahoraria/editar-ch/editar-ch.component';
import { ListahComponent } from './admin/horario/listah/listah.component';
import { HorarioComponent } from './admin/horario/horario.component';
import { CrearhComponent } from './admin/horario/crearh/crearh.component';
import { EditarhComponent } from './admin/horario/editarh/editarh.component';
import { CarreraMateriaComponent } from './admin/carrera-materia/carrera-materia.component';
import { ListaCMComponent } from './admin/carrera-materia/lista-cm/lista-cm.component';
import { CrearCMComponent } from './admin/carrera-materia/crear-cm/crear-cm.component';
import { EditarCMComponent } from './admin/carrera-materia/editar-cm/editar-cm.component';

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
                title: 'Usuario',
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
                children:[
                  {
                    path: '',
                        component: ListaAComponent
                  },
                  {
                    path: 'crear',
                        component: CrearAComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarAComponent
                  }
                ]
              },
              {
                path: 'maestro',
                title: 'Maestro',
                component: MaestroComponent,
                children:[
                  {
                    path: '',
                        component: ListaMaComponent
                  },
                  {
                    path: 'crear',
                        component: CrearMaComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarMaComponent
                  }
                ]
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
                path: 'carrera-materia',
                title: 'Carrea Materia',
                component: CarreraMateriaComponent,
                children:[
                  {
                    path: '',
                        component: ListaCMComponent
                  },
                  {
                    path: 'crear',
                        component: CrearCMComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarCMComponent
                  }
                ]
              },
              {
                path: 'modulo',
                title: 'Modulo',
                component: ModuloComponent,
                children:[
                  {
                    path: '',
                        component: ListaModComponent
                  },
                  {
                    path: 'crear',
                        component: CrearModComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarModComponent
                  }
                ]
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
                path: 'carrera',
                title: 'Carrera',
                component: CarreraComponent,
                children:[
                  {
                    path: '',
                        component: ListacComponent
                  },
                  {
                    path: 'crear',
                        component: CrearcComponent
                  },
                  {
                    path: 'editar/:id',
                        component: EditarcComponent
                  }
                ]
              },
              {
                path: 'asistencia',
                title: 'Asistencia',
                component: AsistenciaComponent,
                children:[
                  {
                    path: '',
                        component: ListaAsisComponent
                  },
                  {
                    path: 'crear',
                        component: CrearAsisComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarAsisComponent
                  }
                ]
              },
              {
                path: 'aula',
                title: 'Aula',
                component: AulaComponent,
                children:[
                  {
                    path: '',
                        component: ListaAulComponent
                  },
                  {
                    path: 'crear',
                        component: CrearAulComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarAulComponent
                  }
                ]
              },
              {
                path: 'carga-horaria',
                title: 'Carga Horaria',
                component: CargahorariaComponent,
                children:[
                  {
                    path: '',
                        component: ListaChComponent
                  },
                  {
                    path: 'crear',
                        component: CrearChComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarChComponent
                  }
                ]
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
                path: 'horario',
                title: 'Horario',
                component: HorarioComponent,
                children:[
                  {
                    path: '',
                        component: ListahComponent
                  },
                  {
                    path: 'crear',
                        component: CrearhComponent
                  },
                  {
                    path: 'editar/:id',
                      component: EditarhComponent
                  }
                ]
              },
        ]
    },

];
