import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FailureLevesShowPipe,
  StatusShowPipe,
  StartOrProhibitShowPipe,
  DepPatternShowPipe,
  ProblemTypeShowPipe,
  VersionShowPipe
} from './app.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FailureLevesShowPipe,
    StatusShowPipe,
    StartOrProhibitShowPipe,
    VersionShowPipe,
    DepPatternShowPipe,
    ProblemTypeShowPipe
  ],
  exports: [
    FailureLevesShowPipe,
    StatusShowPipe,
    StartOrProhibitShowPipe,
    VersionShowPipe,
    DepPatternShowPipe,
    ProblemTypeShowPipe
  ]
})
export class PipeModule {}
